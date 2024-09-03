import { axiosInstance } from "@/config/axios";
import { API_ENUMS } from "@/enums/apiEnums";

class BucketService {
  async createBucket() {
    try {
      const response = await axiosInstance.post("/buckets");
      return response.data;
    } catch (err) {
      throw new Error("Failed to create bucket");
    }
  }

  async getBukets() {
    try {
      const response = await axiosInstance.get(`${API_ENUMS.BUCKET}/fetch`);
      return response?.data?.results;
    } catch (err) {
      throw new Error("Failed to get buckets");
    }
  }

  async getBucketContents() {
    try {
      const response = await axiosInstance.get("/buckets/contents");
      return response.data;
    } catch (err) {
      throw new Error("Failed to get bucket contents");
    }
  }

  
}

export default BucketService;
