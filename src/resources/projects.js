import digital from "../assets/digital.jpg";
import go from "../assets/go.jpg";
import game from "../assets/game.jpg";

export const projects = [
    {
        "ID": 2,
        "technologies_used": ["Go Lang,   ", " Shell"],
        "title": "ConGo",
        "image": go,
        "description": "I developed a concurrent version of the Linux `grep` command from scratch using Golang. This implementation includes features such as various flags for different configurations, pattern highlighting, regex-based matching, and a tree view for improved visibility of results. The concurrent design enhances performance, making it faster for handling large datasets.",
        "github_link": "https://github.com/Mr-Split/ConGo"
    },
    {
        "ID": 3,
        "technologies_used": ["Java,   ", "Maven,   ", "Tomcat,   ", "Spring Boot,   ", "Jenkins  "],
        "title": "CI/CD Deploment Project",
        "image": digital,
         "description": "I created a Maven project in Eclipse IDE using AngularJS and Spring Boot, developing a seamless full-stack application. Additionally, I set up a CI/CD pipeline using Jenkins, GitHub, Tomcat, and AWS services such as EC2 and Elastic IP, automating the deployment process and ensuring efficient code integration and delivery.",
        "github_link": "https://github.com/Mr-Split/javaapp-jenkins1"
    },
    {
        "ID": 1,
        "technologies_used": ["C#,   ", "Shell "],
        "title": "GameZone",
        "image": game,
        "description": "I developed a C#-based gaming application featuring a variety of mini-games, allowing users to easily switch between different game experiences. I also added a hidden feature where entering a specific pattern reveals an encrypted message, adding a fun, secret element for users to discover.",
        "github_link": "https://github.com/Mr-Split/GameZone"
    }
]