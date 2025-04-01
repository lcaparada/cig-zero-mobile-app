const createMissionOnUserAdapter = ({
  new_level,
}: {
  new_level: number;
}): { newLevel: number } => {
  return {
    newLevel: new_level,
  };
};

export const challengeAdapter = {
  createMissionOnUserAdapter,
};
