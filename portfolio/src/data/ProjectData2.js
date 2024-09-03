// importing image paths
// Team Tech 2023-2024 Images
import teamTech23Image1 from '../images/projects/teamTech23/teamTechAustinExample1.jpg';
import teamTech23Image2 from '../images/projects/teamTech23/teamTechAustinExample2.jpg';
import teamTech23Image3 from '../images/projects/teamTech23/teamTechAustinExample3.jpg';
import teamTech23Image4 from '../images/projects/teamTech23/teamTechAustinExample4.jpg';
import teamTech23Image5 from '../images/projects/teamTech23/teamTechAustinExample5.jpg';
import teamTech23Image6 from '../images/projects/teamTech23/teamTechFilterOptions.jpg';
import teamTech23Image7 from '../images/projects/teamTech23/teamTechInitialPage.jpg';
import teamTech23Image8 from '../images/projects/teamTech23/teamTechMapCalendarFilter.jpg';
import teamTech23Image9 from '../images/projects/teamTech23/teamTechMapInitial.jpg';
import teamTech23Image10 from '../images/projects/teamTech23/teamTechMapInvalidSatelliteSearch.jpg';
import teamTech23Image11 from '../images/projects/teamTech23/teamTechMapSatelliteNotFound.jpg';
import teamTech23Image12 from '../images/projects/teamTech23/teamTechMapSearchByDate.jpg';
import teamTech23Image13 from '../images/projects/teamTech23/teamTechMapSelectSatellite.jpg';

// Team Tech 2022-2023 Images
import teamTech22Image1 from '../images/projects/teamTech22.png';

// Minesweeper Images
import minesweeper from '../images/projects/minesweeper.jpg';

// inDepth Images
import inDepthImage1 from '../images/projects/inDepth/InDepthLogo.png';
import inDepthImage2 from '../images/projects/inDepth/uploadAttendance.jpg';
import inDepthImage3 from '../images/projects/inDepth/eventDemoChar.jpg';
import inDepthImage4 from '../images/projects/inDepth/eventDemoMajor.jpg';
import inDepthImage5 from '../images/projects/inDepth/eventDemoYear.jpg';
import inDepthImage6 from '../images/projects/inDepth/topMembers.jpg';

// Breaking Down Bias Images
import breakingDownBiasImage1 from '../images/projects/breakingDownBias/Breaking.png';
import breakingDownBiasImage2 from '../images/projects/breakingDownBias/comparator.png';
import breakingDownBiasImage3 from '../images/projects/breakingDownBias/worldmap.png';

// Raise the Bar Images
import raiseTheBarImage1 from '../images/projects/raiseTheBar/loginScreen.jpg';
import raiseTheBarImage2 from '../images/projects/raiseTheBar/signupScreen.jpg';
import raiseTheBarImage4 from '../images/projects/raiseTheBar/chatScreen.jpg';
import raiseTheBarImage3 from '../images/projects/raiseTheBar/homeScreen.jpg';
import raiseTheBarImage5 from '../images/projects/raiseTheBar/completedScreen.jpg';
import raiseTheBarImage6 from '../images/projects/raiseTheBar/copyingScreen.jpg';
import raiseTheBarImage7 from '../images/projects/raiseTheBar/progressScreen.jpg';
import raiseTheBarImage8 from '../images/projects/raiseTheBar/progressScreen2.jpg';
import raiseTheBarImage9 from '../images/projects/raiseTheBar/profileScreen.jpg';

// under construction
import underConstruction from '../images/projects/pageUnderConstruction.png'

// data
export const ProjectData = [
    {
        name: 'Team Tech: CACI Satellite Schedule & Visualizer 23-24',
        projectOverview: 'Society of Women Engineer\'s Team Tech Project, which focused on improving last year\'s satellite schedule by adding new features for filtering and visualizing. The team consisted of 5 subteams: an aerospace, 2 backend, and 2 frontend teams, who all collaborated to build the project.',
        languages: ['C++', 'JavaScript', 'React.js'],
        toolLibraries: ['MongoDB', 'Node.js', 'Leaflet.js', 'Material UI'],
        dateCreated: 'September 2023',
        dateCompleted: 'April 2024',
        linkTo: 'https://github.com/Lyra126/teamTech23-24',
        role: 'For this year, I took upon the role of being a subteam lead, where I was in-charge of planning and leading a team. My team focused on frontend development, where we got to work on the new feature of implementing the map for visualization. The objective of my team was to create a visual that shows the satellite\'s current locations on a map and its projected path. Through our map, we allowed users to search up the satellite by ID value and filter by the date. The search functionality also included user validation and would auto populate the various satellites. This team worked closely with the other frontend team to ensure the design was cohesive and consistent throughout. Furthermore, I worked with their lead to ensure the navigation to the map page was simple. As a team lead, I was responsible for setting the goals and tasks of the team, and hosting bi-weekly meetings. Through our meetings, I would delegate responsibilities to my team and check in with their progress to see if they need any assistance as for many of them it was their first time working with frontend code.',
        takeaways: 'This experience allowed me to not just work in the team setting, but also made me responsible for guiding the team and providing updates to our Team Tech leads. I got to immerse myself in collaboration and see how computer science can intertwine with other fields of engineering. I learned a great deal about being a leader and effective communication. With my team, I was constantly sending updates and progress reports as well as check in with team members when they missed a meeting. Unfortunately, my team members start to trickle off towards the end of the project, which left me having to pick up their tasks. However, it did teach me a lot of coding frontend and implementing a search bar, which was incredible to see the validation work and auto populating features. Although coding can be frusturating, it is always amazing to see the end product and getting to work with all the different subteams was incredible and very helpful for the diverse perspectives. I learned about project management and planning effectively to ensure you can meet the timeline, which was the end of April as we start in January coding the project.',
        description: 'Through Society of Women Engineers (SWE), I was able to be a part of their Team Tech, which partners students with an industry leader to help them build a solution to their problems. Our team got to work with CACI who specializes in technology for the US government, and has partnered with SWE in the past. This year\'s project focused on improving our work last year, which focused on developing a website that would display a 7-day satellite schedule. With this in mind, we focused on bring in new features, like improving the UI to account for time zones and ground stations, and adding a map for visualization. Through this project, our team was able to collaborate with CACI engineers to improve our project and produce new features. Team Tech divided into three sub areas: Aerospace, Backend, and Frontend. We had a total of 5 different subteams, who each worked on different parts of the projects. The aerospace team focused on researching how weather can impact a satellite\'s path and how the algorithm could be adapted to reflect the weather conditions as well as understanding the best possible path between ground stations (which ground station should we use). There were two backend teams, which leveraged c++ and MongoDB as our database. One of the backend subteams focused on figuring out whether the previous database of MongoDB could be switched to MySQL to output the json files that are used by the frontend teams. The other backend team focused on updating our algorithm for producing the schedule since we previously used a greedy algorithm but would like to upgrade to the NSGA-II algorithm. For the two frontend teams, one of the teams focused on a new feature, which was visualizing on a map the satellite\'s approximate location and path. While the other team revised our schedule part to make it more user friendly and customizable by adding a download feature, filtering by ground station, and enabling time zone conversions.',
        images: [teamTech23Image1, teamTech23Image2, teamTech23Image3, teamTech23Image4, teamTech23Image5, teamTech23Image6, teamTech23Image7, teamTech23Image8, teamTech23Image9, teamTech23Image10, teamTech23Image11, teamTech23Image12, teamTech23Image13]
    },
    {
        name: 'Team Tech: CACI Satellite Schedule 22-23',
        projectOverview: '',
        languages: ['C++', 'JavaScript', 'React.js'],
        toolLibraries: [],
        dateCreated: 'September 2022',
        dateCompleted: 'April 2023',
        linkTo: '',
        role: '',
        takeaways: '',
        description: '',
        images: [teamTech22Image1]
    },
    {
        name: 'Raise the Bar',
        projectOverview: '',
        languages: ['JavaScript'],
        toolLibraries: ['MongoDB', 'Node.js', 'Express.js', 'React.js', 'Material UI', 'Figma', 'Jira'],
        dateCreated: 'January 2024',
        dateCompleted: 'April 2024',
        linkTo: 'https://github.com/ThomasOli/WorkoutAI-Assistant',
        role: '',
        takeaways: '',
        description: 'Raise the Bar is web-based training application that uses generative AI to provide users with immediate, customizable workout routines depending on their specifications. Raise the Bar distinguishes itself from other workout applications by including an interactive user interface that enables users to check off exercises as they are completed, different routines catered to users depending on how often they expect to work out, and a user profile that tracks workout progress. This all comes together to create a satisfying workout experience for gym enthusiasts, who will no longer endlessly search through sources to find desirable exercise routines, and no longer need to use non-digital, inefficient means to try and keep track of their workout progression. Our project provides value to the marketplace by introducing an intuitive, helpful, AI assistant to aid gym enthusiasts and newcomers alike in curating bespoke workout routines. It modernizes fitness tracking by innovating a streamlined approach to planning, tracking, tabulating, and checking off workouts. With this constant stream of fitness information at gym goers’ disposal, they will be incentivized to follow through with their fitness plans and keep on top of their health and wellness.',
        images: [raiseTheBarImage1, raiseTheBarImage2, raiseTheBarImage3, raiseTheBarImage4, raiseTheBarImage5, raiseTheBarImage6, raiseTheBarImage7, raiseTheBarImage8, raiseTheBarImage9]
    },
    {
        name: 'InDepth',
        projectOverview: '',
        languages: ['R'],
        toolLibraries: ['LaTex', ''],
        dateCreated: 'March 2024',
        dateCompleted: 'April 2024',
        linkTo: 'https://github.com/ananyasista/InDepth',
        role: '',
        takeaways: '',
        description: '',
        images: [inDepthImage1, inDepthImage2, inDepthImage3, inDepthImage4, inDepthImage5, inDepthImage6]
    },
    {
        name: 'plc++',
        projectOverview: '',
        languages: ['Java'],
        toolLibraries: ['JUnit'],
        dateCreated: 'January 2024',
        dateCompleted: 'April 2024',
        linkTo: 'https://github.com/ananyasista/PLC_Project',
        role: '',
        takeaways: '',
        description: '',
        images: [underConstruction]
    },
    {
        name: 'Where in the World?',
        projectOverview: '',
        languages: ['C++'],
        toolLibraries: ['SMFL'],
        dateCreated: 'December 2023',
        dateCompleted: 'December 2023',
        linkTo: 'https://github.com/ananyasista/WhereIntheWorld',
        role: '',
        takeaways: '',
        description: '',
        images: [underConstruction]
    },
    {
        name: 'Breaking Down Bias',
        projectOverview: 'My WiNGHacks project, where my partner Devika and I wanted to push ourselves outside our comfort zone while also refreshing our python skills by using Taipy. Breaking Down Bias offers an exploration of gender bias through data visualizations to empower users to understand and address societal inequalities and biases.',
        languages: ['Python'],
        toolLibraries: ['Pandas', 'Taipy', 'Numpy', 'Markdown'],
        dateCreated: 'April 5th, 2024',
        dateCompleted: 'April 7th, 2024',
        linkTo: 'https://github.com/dvkeia/BreakingDownBias',
        role: 'We built Breaking Down Bias with Taipy and Python, leveraging pandas for seamless data management and Taipy for easy to create dashboards with data visualization. We transformed the Excel sheets from 2023 Gender Social Norms Index Report into CSV files, reforming the sheets to only include the tables of data without any merged cells or unnecessary cells to make it easy to read through pandas. We used markdown to format the pages and display the graphs and information.',
        takeaways: 'This was an amazing learning experience, especially with understanding how to do data visualization. We learned how to use Taipy and pandas in python, which was a lot of fun getting to play with the code to change the data we used. Planning things out is wonderful, at the end of Friday, we set a plan in motion which definitely helped keep us on track for our Saturday time of coding and completing the project. We learned how read through documentation and reference resources that Taipy provide to develop our dashboard. We tried out deployment for the first time, took awhile but cool to see how it looks. We learned how to deploy on Microsoft Azure using CLI and Taipy Cloud using their machines.',
        description: 'This my project from participating in WiNGHacks, where I partnered with Devika and we decided to try something new by using Taipy. Breaking Down Bias has three main features (Country Comparator, World View, and World Map) for the user to interact with and our home screen, which explains the importance of the topic and a quick break down of the categories studied. With the Country Comparator feature, users can compare the impact of bias between two different nations, gaining insights into the unique challenges each country faces. Breaking Down Bias sheds light on the disparities affecting communities worldwide. Delve deeper with the World View feature, where we dissect the four dimensions of bias (political, physical, educational, and economic) and illustrate how each gender perceives them. Through interactive charts and analysis, users gain a comprehensive understanding of the nuanced layers of societal prejudice and how even women themselves can hold these biases. Navigate the landscape of bias with ease using the World Map function, allowing users to filter and visualize bias percentages across the globe. The filter feature enable us to observe closely the percentages of bias, whether it no bias, at least one bias in the dimension, or specific dimension bias.',
        images: [breakingDownBiasImage1, breakingDownBiasImage2, breakingDownBiasImage3]
    },
    {
        name: 'Minesweeper',
        projectOverview: '',
        languages: ['C++'],
        toolLibraries: ['SFML'],
        dateCreated: 'November 2022',
        dateCompleted: 'December 2022',
        linkTo: '',
        role: '',
        takeaways: '',
        description: '',
        images: [minesweeper]
    },
    {
        name: 'UKG: Login UI Work',
        projectOverview: '',
        languages: ['Java', 'Angular', 'HMTL/CSS', 'Ruby'],
        toolLibraries: ['Postman', 'Docker', 'Jira', 'Bootstrap', 'OpenAM', 'Kubernetes', 'Maven'],
        dateCreated: 'May 2024',
        dateCompleted: 'August 2024',
        linkTo: '',
        role: '',
        takeaways: '',
        description: '',
        images: [underConstruction]
    }
]