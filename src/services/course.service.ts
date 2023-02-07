import { inject, injectable } from "tsyringe";
import { HttpService } from "./http.service";

@injectable()
export class CourseService {
  namespace = 'courses';

  constructor(
    @inject(HttpService) private httpService: HttpService,
  ) {}

  async searchCourses(keyword: string, levels: string[], size: number, page: number) {
    return this.httpService.get(`/${this.namespace}/search?keyword=${keyword}&levels=${levels.join(',')}&size=${size}&page=${page}`).then((res) => res.data);
  }

  async getStudentView() {
    return this.httpService.get(`/${this.namespace}/popular`).then((res) => {
      return res.data
    });
  }

  async getCourseById(id: string) {
    return this.httpService.get(`/${this.namespace}/${id}`).then((res) => res.data);
  }

  async enrollCourse(ids: string[]) {
    return this.httpService.post(`/${this.namespace}/enroll`, {
      courseIds: ids
    });
  }
}
