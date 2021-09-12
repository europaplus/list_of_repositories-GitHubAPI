import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { Drawer } from "antd";

import { getRepoBranches } from "../../root/root";
import { BrancheList } from "../../store/GitHubStore/types";

type RepoBranchesDrawerProps = {
  isDrawer: boolean;
  onClose: () => void;
};

const RepoBranchesDrawer: React.FC<RepoBranchesDrawerProps> = ({
  onClose,
  isDrawer,
}) => {
  const [branchList, setBranchList] = useState<BrancheList[]>([]);
  let { id } = useParams<{ id: string }>();

  const getRepoBranchesWrapper = async () => {
    return await getRepoBranches(id);
  };

  React.useEffect(() => {
    getRepoBranchesWrapper().then((res) => {
      if (res.success) {
        setBranchList(res.data);
      }
    });
  }, [id]);

  return (
    <Drawer
      title={"Branches"}
      placement="right"
      visible={isDrawer}
      onClose={onClose}
    >
      {!branchList.length && "Веток не найдено"}
      {branchList.map((item, index) => {
        return <p key={item.name}>{`${index + 1}. ${item.name}`}</p>;
      })}
    </Drawer>
  );
};

export default React.memo(RepoBranchesDrawer);
