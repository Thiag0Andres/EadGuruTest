export interface PropsRootStack {
  Home: undefined;
  Courses: undefined;
  CourseDetail: {
    data: {
      id: number;
      title: string;
      instructor: string;
      duration: string;
      description: string;
      src: any;
    };
  };
  Class: {
    data: {
      id: number;
      title: string;
      url: string;
    };
  };
}
