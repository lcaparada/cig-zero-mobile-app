import { Missions, MissionsAPI } from "./missionsTypes";

const getAllMissionsAdapter = (missionsAPI: MissionsAPI[]): Missions[] => {
  return missionsAPI.map((mission) => ({
    category: {
      name: mission.category.name,
      type: mission.category.type,
    },
    data: mission.data,
    percentage: mission.percentage,
    description: mission.description,
    id: mission.id,
    title: mission.title,
  }));
};

export const missionsAdapter = {
  getAllMissionsAdapter,
};
