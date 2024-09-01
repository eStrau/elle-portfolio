// BASIS
// Going to change structuring/format and details that are included
import teamTech22 from '../images/projects/teamTech22.png';
import minesweeper from '../images/projects/minesweeper.jpg';
import underConstruct from '../images/projects/pageUnderConstruction.png';

// changes:
// make details to take a list and then that list can break into paragraphs when we display
// change display for github link (if not empty add a section)
// maybe what I learned section and my role and then details is like a summary of what the project is

export const ProjectData = [
    {
        name: "CACI Satellite Schedule 23-24",
        image: underConstruct,
        lang: "C++ / JavaScript / React",
        details: "",
        summary: "Weekly Satellite Schedule and Map Visualization for CACI",
        github: "https://github.com/Lyra126/teamTech23-24"
    },
    {
        name: "Raise the Bar",
        image: underConstruct,
        lang: "MongoDB / Express / React / Node",
        details: "Raise the Bar is web-based training application that uses generative AI to provide users with immediate, customizable workout routines depending on their specifications. Raise the Bar distinguishes itself from other workout applications by including an interactive user interface that enables users to check off exercises as they are completed, different routines catered to users depending on how often they expect to work out, and a user profile that tracks workout progress. This all comes together to create a satisfying workout experience for gym enthusiasts, who will no longer endlessly search through sources to find desirable exercise routines, and no longer need to use non-digital, inefficient means to try and keep track of their workout progression.",
        summary: "Developing Personal Workout Routines Using an AI Chatbot Assistant",
        github: "https://github.com/ThomasOli/WorkoutAI-Assistant"
    },
    {
        name: "InDepth",
        image: underConstruct,
        lang: "R",
        details: "InDepth is an attendance sheet parser created specifically for the University of Florida organization Women in Computer Science and Engineering (WiCSE), but has features that allow it to be extended to other organizational use. InDepth interfaces directly with Google Sheets, and takes in the URL of an attendance Google Sheets workbook that an organization uses and parses through the data of a specified individual attendance sheet. That data is then appended to a total attendance sheet, a sheet containing unique members and their attendance counts, and an email list to upload to the organization ListServ. Future extensions to the project include UI enhancements, further documentation, and options that allow the software’s functions to be more customizable to the context of the user.",
        summary: "Improving Student Organization Member Data Collection",
        github: "https://github.com/ananyasista/InDepth"
    },
    {
        name: "PLC",
        image: underConstruct,
        lang: "Java",
        details: "",
        summary: "My Very Own Compiler",
        github: ""
    },
    {
        name: "CACI Weekly Satellite Schedule 22-23",
        image: teamTech22,
        lang: "C++ / JavaScript / React",
        details: "Through SWE's Team Tech, we collaborated with CACI to build them a 7-day satellite scheduler. I worked on the Front-End Team, where we developed the calendar to show the current day and the six following days. Also, when each day is clicked on the satelittes that will visible that day are listed, which will include their name and start and end times.",
        summary: "Weekly Satellite Schedule for CACI",
        github: "https://github.com/eStrau/teamTech22-23"
    },
    {
        name: "Where in the World?",
        image: underConstruct,
        lang: "C++ / SFML",
        details: "",
        summary: "Mapping out a Roadtrip Using Dijkstra's & Prim's Alogrithms",
        github: "https://github.com/ananyasista/WhereIntheWorld"
    },
    {
        name: "Breaking Down Bias",
        image: underConstruct,
        lang: "Python / Taipy / Pandas",
        details: "Breaking Down Bias offers a exploration of bias through data visualization to empower users to understand and address societal inequalities and biases. Breaking Down Bias has three main features (Country Comparator, World View, and World Map) for the user to interact with and our home screen, which explains the importance of the topic and a quick break down of the categories studied. With the Country Comparator feature, users can compare the impact of bias between two different nations, gaining insights into the unique challenges each country faces. Breaking Down Bias sheds light on the disparities affecting communities worldwide. Delve deeper with the World View feature, where we dissect the four dimensions of bias (political, physical, educational, and economic) and illustrate how each gender perceives them. Through interactive charts and analysis, users gain a comprehensive understanding of the nuanced layers of societal prejudice and how even women themselves can hold these biases. Navigate the landscape of bias with ease using the World Map function, allowing users to filter and visualize bias percentages across the globe. The filter feature enable us to observe closely the percentages of bias, whether it no bias, at least one bias in the dimension, or specific dimension bias.",
        summary: "Exploration of Gender and Societal Bias through Data Visualization",
        github: "https://github.com/dvkeia/BreakingDownBias"
    },
    {
        name: "UKG",
        image: underConstruct,
        lang: "",
        details: "",
        summary: "Improving Login UI Defects for the FleX Foundation Pillar",
        github: ""
    },
    {
        name: "Minesweeper",
        image: minesweeper,
        lang: "C++ / SFML",
        details: "I recreated a working version of the classic PC game Minesweeper. For this project, I developed an object-oriented program by building classes to represent the various elements along with their functionality.",
        summary: "Remaking the Classic PC Game Minesweeper",
        github: "https://github.com/eStrau"
    }
]