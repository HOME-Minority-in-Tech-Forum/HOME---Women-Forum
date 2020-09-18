# To get started in Backend
```sh
npm install
npm start
```



# API routes

### Get infomation from companies
```sh
GET: /api/companies

   [{
        "id": "1",
        "hispanic": "10",
        "website": "https: //www.intuit.com",
        "brandImage": "https://quickbooks.intuit.com/cas/dam/IMAGE/A81OBMP2T/icom-logo-ecosystem-lockup-4line-twitter.jpg",
        "statsImageRace": "",
        "asian": "30",
        "companyName": "Intuit",
        "supportingPrograms": [
            {
                "location": "online",
                "programLink": "https: //www.intuit.com/partners/education-program/financial-readiness/",
                "programName": "Financial readiness",
                "description": "Empowering students to develop smart money habits"
            },
            {
                "description": "Equip your students with in -demand and transferable skills like design thinking and QuickBooks to help them rise to the top of any hiring pool.",
                "programName": "Career readiness",
                "location": "online",
                "programLink": "https: //www.intuit.com/partners/education-program/career-readiness/"
            },
            {
                "programName": "Intuit - again",
                "programLink": "https: //www.intuit.com/in/careers/intuit-again/",
                "location": "All locations",
                "description": "Intuit Again is a back to work program through which women in technology can get back to the workforce, regain their confidence, rebuild their careers and make an impact while working with one of the best companies to work for in India."
            },
            {
                "description": "Empowering women technologists to advance their careers and inspire each other to innovate",
                "programLink": "https: //www.intuit.com/careers/programs/tech-women-at-intuit/",
                "programName": "Tech women at Intuit",
                "location": "All locations"
            },
            {
                "programLink": "https: //www.intuit.com/careers/programs/students-and-grads/",
                "location": "All locations",
                "programName": "Students and grads at Intuit",
                "description": "Apply your academic learnings to real world problems and work alongside professionals that will help take your career to the next level."
            }
        ],
        "women": "37",
        "statsImageSex": "",
        "white": "4",
        "african_american": "2"
    }]
 ```  

### Get youtube videos

```sh
GET: /api/videos
[
    {
        "id": "6d1HBpgQ5Ck",
        "VideoTitle": "Women in Technology: Time to close the gender gap",
        "thumbnail": "http://i3.ytimg.com/vi/6d1HBpgQ5Ck/maxresdefault.jpg",
        "url": "https://www.youtube.com/watch?v=6d1HBpgQ5Ck",
        "Company": "Computer History Museum",
        "description": "Pay Discrimination in Tech"
    }
]
```

### Get videos likes and message
```sh
GET: /api/videosreq
[
    {
        "id": "c9074b10-e1b5-11ea-9908-7bb15679cba4",
        "Message": "Toxic masculinity in tech",
        "Likes": 123
    }

]
```

### Get video links from Cloud Storage

```sh
GET: /api/storage/videos
[
    "https://firebasestorage.googleapis.com/v0/b/home-bb96d.appspot.com/o/Videos%2FTechnologyWomen.mp4?alt=media&token=b9646580-4462-471d-8a96-a30711fc1b8b"
]
```

### Authorization <--- still working on this
POST: api/auth/login
POST: api/auth/signup
POST: api/auth/signin
POST: api/auth/signout
GET: api/auth/userinfo