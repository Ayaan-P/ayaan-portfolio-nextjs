 
// import "@mui/material";
// import { Container, List, Paper, Typography, Avatar } from "@mui/material";
// import CssBaseline from "@mui/material/CssBaseline";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import * as React from "react";
// import "./App.css";
// import ProfileCard from "./components/ProfileCard";
 
// import ProfilePic from "./images/profilepic.jpg";
// import NorthwesternImg from './images/Northwestern.png'
// import CathedralImg from './images/cathedral.jpg'
// import UIUCImg from './images/uiuc.jpg'
// import EpigeneresImg from './images/epigen.jpeg'
// import NetworkImg from './images/network.jpeg'
// import KarsunImg from './images/karsun.jpeg'
// import GitImg from './images/google.png'
 
// import PersonIcon from '@mui/icons-material/Person';
// import AutoStoriesIcon from '@mui/icons-material/AutoStories';
// import WorkIcon from '@mui/icons-material/Work';
// import SourceIcon from '@mui/icons-material/Source';
// import { spacing } from "@mui/system";
// import ChipsArray from "./components/ChipArray";

// const themeDark = createTheme({
//   palette: {
//     background: {
//       default: "#222222",
//     },
//     text: {
//       primary: "#ffffff",
//     },
//     mode: "dark",
//   },
// });
 
// function App() {
//   const educationSections = [
//     {
//       id: 1,
//       sectionTitle: "Northwestern University",
//       subtitle: "Master of Science in Artificial Intelligence",
//       aboutText: "",
//       date: "September 2024 - December 2025",
//       imgSrc: NorthwesternImg,
      
//     },
//     {
//       id: 2,
//       sectionTitle: "University of Illinois at Urbana-Champaign",
//       subtitle: "Bachelor of Science in Computer Engineering",
//       aboutText: "",
//       date: "August 2017 - December 2021",
//       imgSrc: UIUCImg,
      
//     },
//     {
//       id: 3,
//       sectionTitle: "Cathedral and John Connon School",
//       subtitle: "ICSE, ISC Science",
//       aboutText: "",
//       date: "May 2017",
//       imgSrc: CathedralImg,
//     },
//   ];
//   const workSections = [
//     {
//       id: 1,
//       sectionTitle: "Epigeneres Biotech",
//       subtitle: "ML Engineer",
//       aboutText: "",
//       date: "October 2023 - Present",
//       imgSrc: EpigeneresImg,
//     },
//     {
//       id: 2,
//       sectionTitle: "Karsun Solutions LLC",
//       subtitle: "Software Engineer",
//       aboutText: "",
//       date: "March 2021 - Present",
//       imgSrc: KarsunImg,
//     },
//     {
//       id: 3,
//       sectionTitle: "Network International LLC",
//       subtitle: "Software Engineering Intern",
//       aboutText: "",
//       date: "May 2018 - July 2018",
//       imgSrc: NetworkImg,
//     },
//   ];
//   const aboutSections = [
//     {
//       id: 1,
//       sectionTitle: "Incoming Master of Science in Artificial Intelligence student at Northwestern University starting Fall 2024",
//       aboutText: '- Currently work on creating deep learning models to detect cancer in the early stages with Epigeneres Biotech \n- 3 years of Software Engineering Experience as a Fullstack Developer with Karsun Solutions LLC\n- Contracted with the Federal Aviation Administration and General Services Administration',
//       date: "",
//       imgSrc: "",
//       about: "true",
//     },
//   ];
//   const projectSections = [
//     {
//       id: 1,
//       sectionTitle: "React Web Development",
//       aboutText: "",
//       date: "",
//       imgSrc:  "",
//     },
//     {
//       id: 2,
//       sectionTitle: "React Native App Development",
//       aboutText: "",
//       date: "",
//       imgSrc: "",
//     },
//     {
//       id: 3,
//       sectionTitle: "Game Development",
//       aboutText: "",
//       date: "",
//       imgSrc: "",
//     },
//     {
//       id: 4,
//       sectionTitle: "Image Classification",
//       aboutText: "",
//       date: "",
//       imgSrc: "",
//     },
//     {
//       id: 5,
//       sectionTitle: "Android App Development",
//       aboutText: "",
//       date: "",
//       imgSrc: "",
//     },
//   ];
 
//   return (
//     <ThemeProvider theme={themeDark}>
//       <CssBaseline />
//       <Container maxWidth="100%">
//         <div className="App" >
//           <Paper
//             sx={{
//               maxWidth: "100%",
//               minHeight: 275,
//               background: "darkgrey",
//               padding: 5,
            
//             }}
//             justifyContent={"center"}
//           >
//             <Avatar
//               alt="display"
//               src={ProfilePic}
//               display="flex"
//               sx={{
//                 width: 100,
//                 height: 100,
//                 justifyContent: "center",
//                 margin: "auto",
//               }}
//             />
 
//             <Typography variant="h2" color={"black"}>
//               Ayaan Pupala
//             </Typography>

//             <ChipsArray>
//             </ChipsArray> 

//             <Paper
//               elevation={0}
//               style={{
//                 maxWidth: "95%",
//                 minWidth: "80%",
//                 maxHeight: 750,
//                 overflow: "auto",
//                 margin: "auto",
//                 padding: 10,
//                 justifyContent: "center",
//                 background: "darkgrey",
//               }}
//             >
//               <List
//                 style={{
//                   maxHeight: "80%",
//                   minWidth:"80%",
//                   overflow: "hidden",
//                   justifyContent: "center",
//                 }}
//               >
//                 <ProfileCard
//                   icon={() => <PersonIcon className="Card-icon" />}
//                   sectionTitle="About"
//                   sections={aboutSections}
//                   about={true}
//                 />
 
//                 <ProfileCard
//                 icon={() => <AutoStoriesIcon className="Card-icon"  />}
//                   sectionTitle="Education"
//                   sections={educationSections}
//                 />
 
//                 <ProfileCard
//                 icon={() => <WorkIcon className="Card-icon"  />}
//                   sectionTitle="Work Experience"
//                   sections={workSections}
//                 />
 
//                 <ProfileCard
//                 icon={() => <SourceIcon  className="Card-icon" />}
//                   sectionTitle="Projects"
//                   sections={projectSections}
//                 />
//                 <SocialLinks />
//               </List>
//             </Paper>
//           </Paper>
//         </div>
//       </Container>
//     </ThemeProvider>
//   );
// }
 
// export default App;
 