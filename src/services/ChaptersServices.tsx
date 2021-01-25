import http from "../core/http-common";

const getAllChapters = () => {
  return http.get("/Chapters");
};

const getIdChapter = (id: number) => {
  return http.get(`/Chapter/${id}`);
};
const createChapter = (data: any) => {
  return http.post("/Chapter", data);
};
const updateChapter = (id: number, data: any) => {
  return http.put(`/Chapter/${id}`, data);
};

const removeChapter = (id: number) => {
  return http.delete(`/Chapter/${id}`);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllChapters,
  getIdChapter,
  createChapter,
  updateChapter,
  removeChapter,
};
