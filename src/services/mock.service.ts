import { injectable } from 'tsyringe'

@injectable()
export class MockService {
  getStudentsView() {
    return Promise.resolve([
      {
        _id: '1',
        thumbnail: 'https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg',
        title: '1212  12 12 12 12 12 1Learn Python: The Complete Python Programming Course',
        description: 'Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!',
        creator: {
          name: 'Angela Yu',
        },
        rating: {
          averageValue: 4.5,
          totalRatings: 125130,
        },
        price: {
          originalPrice: 2000,
          discountPrice: 1000,
        },
        isBestSeller: true,
      },
      {
        _id: '2',
        thumbnail: 'https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg',
        title: '100 Days of Code: The Complete Python Pro Bootcamp for 2023',
        description: 'Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!',
        creator: {
          name: 'Angela Yu',
        },
        rating: {
          averageValue: 4.5,
          totalRatings: 125130,
        },
        price: {
          originalPrice: 2399,
          discountPrice: 422,
        },
        isBestSeller: false,
      },
      {
        _id: '3',
        thumbnail: 'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg',
        title: 'The Complete JavaScript Course 2023: From Zero to Expert!',
        description: 'Learn JavaScript like a Professional! Start from the basics and go all the way to creating your own applications and games!',
        creator: {
          name: 'Jonas Schmedtmann',
        },
        rating: {
          averageValue: 4.5,
          totalRatings: 125130,
        },
        price: {
          originalPrice: 2399,
          discountPrice: 422,
        },
        isBestSeller: true,
      },
      {
        _id: '3.5',
        thumbnail: 'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg',
        title: 'The Complete JavaScript Course 2023: From Zero to Expert!',
        description: 'Learn JavaScript like a Professional! Start from the basics and go all the way to creating your own applications and games!',
        creator: {
          name: 'Jonas Schmedtmann',
        },
        rating: {
          averageValue: 4.5,
          totalRatings: 125130,
        },
        price: {
          originalPrice: 2399,
          discountPrice: 422,
        },
        isBestSeller: true,
      },
      {
        _id: '4',
        thumbnail: 'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg',
        title: 'The Complete JavaScript Course 2023: From Zero to Expert!',
        description: 'Learn JavaScript like a Professional! Start from the basics and go all the way to creating your own applications and games!',
        creator: {
          name: 'Jonas Schmedtmann',
        },
        rating: {
          averageValue: 4.5,
          totalRatings: 125130,
        },
        price: {
          originalPrice: 2399,
          discountPrice: 422,
        },
        isBestSeller: true,
      },
      {
        _id: '5',
        thumbnail: 'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg',
        title: 'The Complete JavaScript Course 2023: From Zero to Expert!',
        description: 'Learn JavaScript like a Professional! Start from the basics and go all the way to creating your own applications and games!',
        creator: {
          name: 'Jonas Schmedtmann',
        },
        rating: {
          averageValue: 4.5,
          totalRatings: 125130,
        },
        price: {
          originalPrice: 2399,
          discountPrice: 422,
        },
        isBestSeller: true,
      },
      {
        _id: '6',
        thumbnail: 'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg',
        title: 'The Complete JavaScript Course 2023: From Zero to Expert!',
        description: 'Learn JavaScript like a Professional! Start from the basics and go all the way to creating your own applications and games!',
        creator: {
          name: 'Jonas Schmedtmann',
        },
        rating: {
          averageValue: 4.5,
          totalRatings: 125130,
        },
        price: {
          originalPrice: 2399,
          discountPrice: 422,
        },
        isBestSeller: true,
      },
      {
        _id: '7',
        thumbnail: 'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg',
        title: 'The Complete JavaScript Course 2023: From Zero to Expert!',
        description: 'Learn JavaScript like a Professional! Start from the basics and go all the way to creating your own applications and games!',
        creator: {
          name: 'Jonas Schmedtmann',
        },
        rating: {
          averageValue: 4.5,
          totalRatings: 125130,
        },
        price: {
          originalPrice: 2399,
          discountPrice: 422,
        },
        isBestSeller: true,
      },
      {
        _id: '8',
        thumbnail: 'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg',
        title: 'The Complete JavaScript Course 2023: From Zero to Expert!',
        description: 'Learn JavaScript like a Professional! Start from the basics and go all the way to creating your own applications and games!',
        creator: {
          name: 'Jonas Schmedtmann',
        },
        rating: {
          averageValue: 4.5,
          totalRatings: 125130,
        },
        price: {
          originalPrice: 2399,
          discountPrice: 422,
        },
        isBestSeller: true,
      },
      {
        _id: '9',
        thumbnail: 'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg',
        title: 'The Complete JavaScript Course 2023: From Zero to Expert!',
        description: 'Learn JavaScript like a Professional! Start from the basics and go all the way to creating your own applications and games!',
        creator: {
          name: 'Jonas Schmedtmann',
        },
        rating: {
          averageValue: 4.5,
          totalRatings: 125130,
        },
        price: {
          originalPrice: 2399,
          discountPrice: 422,
        },
        isBestSeller: true,
      },
      {
        _id: '10',
        thumbnail: 'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg',
        title: 'The Complete JavaScript Course 2023: From Zero to Expert!',
        description: 'Learn JavaScript like a Professional! Start from the basics and go all the way to creating your own applications and games!',
        creator: {
          name: 'Jonas Schmedtmann',
        },
        rating: {
          averageValue: 4.5,
          totalRatings: 125130,
        },
        price: {
          originalPrice: 2399,
          discountPrice: 422,
        },
        isBestSeller: true,
      },
    ])
  }

  getCoursesBySearch(searchKey: string) {
    return Promise.resolve({
      data: [
        {
          _id: '1',
          thumbnail: 'https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg',
          title: 'Learn Python: The Complete Python Programming Course',
          totalHours: 30,
          level: 'Beginner',
          lectures: 10,
          description: 'Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!',
          creator: {
            name: 'Angela Yu',
          },
          rating: {
            averageValue: 4.5,
            totalRatings: 125130,
          },
          price: {
            originalPrice: 2000,
            discountPrice: 1000,
          },
          isBestSeller: true,
        },
        {
          _id: '2',
          totalHours: 30,
          level: 'Beginner',
          lectures: 10,
          thumbnail: 'https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg',
          title: '100 Days of Code: The Complete Python Pro Bootcamp for 2023',
          description: 'Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games!',
          creator: {
            name: 'Angela Yu',
          },
          rating: {
            averageValue: 4.5,
            totalRatings: 125130,
          },
          price: {
            originalPrice: 2399,
            discountPrice: 422,
          },
          isBestSeller: false,
        },
        {
          _id: '3',
          totalHours: 30,
          level: 'Beginner',
          lectures: 10,
          thumbnail: 'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg',
          title: 'The Complete JavaScript Course 2023: From Zero to Expert!',
          description: 'Learn JavaScript like a Professional! Start from the basics and go all the way to creating your own applications and games!',
          creator: {
            name: 'Jonas Schmedtmann',
          },
          rating: {
            averageValue: 4.5,
            totalRatings: 125130,
          },
          price: {
            originalPrice: 2399,
            discountPrice: 422,
          },
          isBestSeller: true,
        },
        {
          _id: '4',
          totalHours: 30,
          level: 'Beginner',
          lectures: 10,
          thumbnail: 'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg',
          title: 'The Complete JavaScript Course 2023: From Zero to Expert!',
          description: 'Learn JavaScript like a Professional! Start from the basics and go all the way to creating your own applications and games!',
          creator: {
            name: 'Jonas Schmedtmann',
          },
          rating: {
            averageValue: 4.5,
            totalRatings: 125130,
          },
          price: {
            originalPrice: 2399,
            discountPrice: 422,
          },
          isBestSeller: true,
        },
        {
          _id: '5',
          totalHours: 30,
          level: 'Beginner',
          lectures: 10,
          thumbnail: 'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg',
          title: 'The Complete JavaScript Course 2023: From Zero to Expert!',
          description: 'Learn JavaScript like a Professional! Start from the basics and go all the way to creating your own applications and games!',
          creator: {
            name: 'Jonas Schmedtmann',
          },
          rating: {
            averageValue: 4.5,
            totalRatings: 125130,
          },
          price: {
            originalPrice: 2399,
            discountPrice: 422,
          },
          isBestSeller: true,
        },
        {
          _id: '6',
          totalHours: 30,
          level: 'Beginner',
          lectures: 10,
          thumbnail: 'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg',
          title: 'The Complete JavaScript Course 2023: From Zero to Expert!',
          description: 'Learn JavaScript like a Professional! Start from the basics and go all the way to creating your own applications and games!',
          creator: {
            name: 'Jonas Schmedtmann',
          },
          rating: {
            averageValue: 4.5,
            totalRatings: 125130,
          },
          price: {
            originalPrice: 2399,
            discountPrice: 422,
          },
          isBestSeller: true,
        },
        {
          _id: '7',
          totalHours: 30,
          level: 'Beginner',
          lectures: 10,
          thumbnail: 'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg',
          title: 'The Complete JavaScript Course 2023: From Zero to Expert!',
          description: 'Learn JavaScript like a Professional! Start from the basics and go all the way to creating your own applications and games!',
          creator: {
            name: 'Jonas Schmedtmann',
          },
          rating: {
            averageValue: 4.5,
            totalRatings: 125130,
          },
          price: {
            originalPrice: 2399,
            discountPrice: 422,
          },
          isBestSeller: true,
        },
        {
          _id: '8',
          totalHours: 30,
          level: 'Beginner',
          lectures: 10,
          thumbnail: 'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg',
          title: 'The Complete JavaScript Course 2023: From Zero to Expert!',
          description: 'Learn JavaScript like a Professional! Start from the basics and go all the way to creating your own applications and games!',
          creator: {
            name: 'Jonas Schmedtmann',
          },
          rating: {
            averageValue: 4.5,
            totalRatings: 125130,
          },
          price: {
            originalPrice: 2399,
            discountPrice: 422,
          },
          isBestSeller: true,
        },
        {
          _id: '9',
          totalHours: 30,
          level: 'Beginner',
          lectures: 10,
          thumbnail: 'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg',
          title: 'The Complete JavaScript Course 2023: From Zero to Expert!',
          description: 'Learn JavaScript like a Professional! Start from the basics and go all the way to creating your own applications and games!',
          creator: {
            name: 'Jonas Schmedtmann',
          },
          rating: {
            averageValue: 4.5,
            totalRatings: 125130,
          },
          price: {
            originalPrice: 2399,
            discountPrice: 422,
          },
          isBestSeller: true,
        },
        {
          _id: '10',
          totalHours: 30,
          level: 'Beginner',
          lectures: 10,
          thumbnail: 'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg',
          title: 'The Complete JavaScript Course 2023: From Zero to Expert!',
          description: 'Learn JavaScript like a Professional! Start from the basics and go all the way to creating your own applications and games!',
          creator: {
            name: 'Jonas Schmedtmann',
          },
          rating: {
            averageValue: 4.5,
            totalRatings: 125130,
          },
          price: {
            originalPrice: 2399,
            discountPrice: 422,
          },
          isBestSeller: true,
        },
      ],
      total: 77,
    })
  }

  getCourseById(id: string) {
    return Promise.resolve({
      _id: '10',
      enrolled: 3303,
      totalHours: 30,
      subTitle: 'Step by Step Guide: To master javascript with Jonas Schmedtmann',
      level: 'Beginner',
      lectures: 10,
      thumbnail: 'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg',
      title: 'The Complete JavaScript Course 2023: From Zero to Expert!',
      description: '<p>Learn <strong>JavaScript</strong> like a Professional! Start from the basics and go all the way to creating your own applications and games! Learn JavaScript like a Professional! Start from the basics and go all the way to creating your own applications and games! Learn JavaScript like a Professional! Start from the basics and go all the way to creating your own applications and games! <ul><li>12 mariegold</li><li>Over 13 hours of downloadable content</li></ul>Lorem Ipsum</p>',
      creator: {
        name: 'Jonas Schmedtmann',
        occupation: 'Guitarist',
        rating: 4.7,
        reviews: 12312,
        students: 20045,
        courses: 3,
        avatar: 'https://i.picsum.photos/id/92/200/200.jpg?hmac=2cxZLFe94hVFQL5AERTDzRKET_GDG-2qpFi5-ctPekg',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
      },
      rating: {
        averageValue: 4.5,
        totalRatings: 125130,
      },
      price: {
        originalPrice: 2399,
        discountPrice: 422,
      },
      learnings: [
        'Fingerstyle Guiter',
        'Beginner Style',
        'Fingerpicking Guitar',
      ],
      requirements: [
        'Guitar',
        'Mac Studio',
        'Willing to practice',
      ],
      lang: 'English',
      lastUpdated: new Date(Date.now()),
      isBestSeller: true,
      trailerVideo: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    });
  }

  getCartItems() {
    return Promise.resolve([
      {
        _id: '1',
        totalHours: 30,
        level: 'Beginner',
        lectures: 10,
        thumbnail: 'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg',
        title: 'The Complete JavaScript Course 2023: From Zero to Expert!',
        description: 'Learn JavaScript like a Professional! Start from the basics and go all the way to creating your own applications and games!',
        creator: {
          name: 'Jonas Schmedtmann',
        },
        enrolled: 20045,
        rating: {
          averageValue: 4.5,
          totalRatings: 125130,
        },
        price: {
          originalPrice: 2399,
          discountPrice: 422,
        },
        isBestSeller: true,
      },
      {
        _id: '2',
        totalHours: 30,
        level: 'Beginner',
        lectures: 10,
        thumbnail: 'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg',
        title: 'The Complete JavaScript Course 2023: From Zero to Expert!',
        description: 'Learn JavaScript like a Professional! Start from the basics and go all the way to creating your own applications and games!',
        creator: {
          name: 'Jonas Schmedtmann',
        },
        enrolled: 20045,
        rating: {
          averageValue: 4.5,
          totalRatings: 125130,
        },
        price: {
          originalPrice: 2399,
          discountPrice: 422,
        },
        isBestSeller: true,
      },
      {
        _id: '3',
        totalHours: 30,
        level: 'Beginner',
        lectures: 10,
        thumbnail: 'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg',
        title: 'The Complete JavaScript Course 2023: From Zero to Expert!',
        description: 'Learn JavaScript like a Professional! Start from the basics and go all the way to creating your own applications and games!',
        creator: {
          name: 'Jonas Schmedtmann',
        },
        enrolled: 20045,
        rating: {
          averageValue: 4.5,
          totalRatings: 125130,
        },
        price: {
          originalPrice: 2399,
          discountPrice: 422,
        }
      }
    ]);
  }
}