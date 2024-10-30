import { Missions, MissionsAPI } from "./missionsTypes";

const getAllMissionsAdapter = (missionsAPI: MissionsAPI[]): Missions[] => {
  return missionsAPI.map((mission) => ({
    category: {
      name: mission.category.name,
      type: mission.category.type,
    },
    current: mission.current,
    description: mission.description,
    id: mission.id,
    isCompleted: mission.is_completed,
    target: mission.target,
    title: mission.title,
  }));
};

export const missionsAdapter = {
  getAllMissionsAdapter,
};
