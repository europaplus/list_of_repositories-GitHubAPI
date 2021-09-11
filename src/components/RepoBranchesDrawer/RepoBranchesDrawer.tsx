import React, { useState } from "react";

import { Drawer } from "antd";

import { getRepoBranches } from "../../root/root";
import { BrancheList, RepoItem } from "../../store/GitHubStore/types";

type RepoBranchesDrawerProps = {
  selectedRepo: RepoItem;
  isDrawer: boolean;
  onClose: () => void;
};

const RepoBranchesDrawer: React.FC<RepoBranchesDrawerProps> = ({
  onClose,
  isDrawer,
  selectedRepo,
}) => {
  const [branchList, setBranchList] = useState<BrancheList[]>([]);

  const getRepoBranchesWrapper = async () => {
    return await getRepoBranches(selectedRepo.name, selectedRepo.owner.login);
  };

  React.useEffect(() => {
    if (selectedRepo) {
      getRepoBranchesWrapper().then((res) => {
        if (res.success) {
          setBranchList(res.data);
        }
      });
    }
  }, [selectedRepo]);
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
