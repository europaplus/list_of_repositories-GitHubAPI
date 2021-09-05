import React, { useState } from "react";

import { Drawer } from "antd";

import { getRepoBranches } from "../../root/root";
import { BrancheList, RepoItem } from "../../store/GitHubStore/types";

type RepoBranchesDrawerProps = {
  selectedRepo: RepoItem | null;
  isDrawer: boolean;
  onClose: () => void;
};

const RepoBranchesDrawer: React.FC<RepoBranchesDrawerProps> = ({
  onClose,
  isDrawer,
  selectedRepo,
}) => {
  const [branchList, setBranchList] = useState<[] | BrancheList[]>([]);
  React.useEffect(() => {
    if (selectedRepo) {
      getRepoBranches(selectedRepo.name, selectedRepo.owner.login).then(
        (res) => {
          if (res.success) {
            setBranchList(res.data);
          } else {
            setBranchList([{ name: "Веток не найдено" }]);
          }
        }
      );
    }
  }, [selectedRepo]);
  return (
    <Drawer
      title={`Branches`}
      placement="right"
      visible={isDrawer}
      onClose={onClose}
    >
      {branchList.map((item, index) => {
        return <p key={index}>{`${index + 1}. ${item.name}`}</p>;
      })}
    </Drawer>
  );
};

export default RepoBranchesDrawer;
