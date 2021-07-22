import React from "react"
import { getUser } from "../services/auth"

const Stuff = [
  {
    id : 1,
    disciplines: ["Civil", "Engineering"],
    name: "Stand",
    location: "Room 10.1",
    campus: "Sydney",
    contactPerson: "Jason",
    equipmentDetails: "This is some detailed response",
    photos: ["photo1", "photo2"],
    currentProjects: "this is a project",
    recentProjects: "this is a recent project",
    whsInfo: "some whs info",
    bookedTime: "22 March 2001 - 23 March 2001"
  },
  {
    id : 2,
    disciplines: ["Civil", "Engineering"],
    name: "Stand",
    location: "Room 10.1",
    campus: "Sydney",
    contactPerson: "Jason",
    equipmentDetails: "This is some detailed response",
    photos: ["photo1", "photo2"],
    currentProjects: "this is a project",
    recentProjects: "this is a recent project",
    whsInfo: "some whs info",
    bookedTime: "22 March 2001 - 23 March 2001"
  },
  {
    id : 3,
    disciplines: ["Civil", "Engineering"],
    name: "Stand",
    location: "Room 10.1",
    campus: "Sydney",
    contactPerson: "Jason",
    equipmentDetails: "This is some detailed response",
    photos: ["photo1", "photo2"],
    currentProjects: "this is a project",
    recentProjects: "this is a recent project",
    whsInfo: "some whs info",
    bookedTime: "22 March 2001 - 23 March 2001"
  },
  {
    id : 4,
    disciplines: ["Civil", "Engineering"],
    name: "Stand",
    location: "Room 10.1",
    campus: "Sydney",
    contactPerson: "Jason",
    equipmentDetails: "This is some detailed response",
    photos: ["photo1", "photo2"],
    currentProjects: "this is a project",
    recentProjects: "this is a recent project",
    whsInfo: "some whs info",
    bookedTime: "22 March 2001 - 23 March 2001"
  },

]

const Profile = () => (
  <>
    <h1>Your profile</h1>
    <ul>
      <li>Name: {getUser().name}</li>
      <li>E-mail: {getUser().email}</li>
    </ul>
    <h1>Booked Equipment</h1>
    <table style={{borderSpacing: "1.25em"}}>
        <tr>
            <th>ID</th>
            <th>Discipline(s)</th>
            <th>Equipment Name</th>
            <th>Location/Lab</th>
            <th>Campus</th>
            <th>Contact Person</th>
            <th>Equipment Details</th>
            <th>Photos/Videos</th>
            <th>Current Projects</th>
            <th>Recent Projects</th>
            <th>WHS Information</th>
            <th>Time Booked</th>
        </tr>
        {
          Stuff.map(equip => {
            return (
              <tr key={equip.id}>
                <td>{equip.id}</td>
                <td>{equip.disciplines.map( discipline => {return (discipline + `, `)})}</td>
                <td>{equip.name}</td>
                <td>{equip.location}</td>
                <td>{equip.campus}</td>
                <td>{equip.contactPerson}</td>
                <td>{equip.equipmentDetails}</td>
                <td>{equip.photos.map( photo => {return (photo + `, `)})}</td>
                <td>{equip.currentProjects}</td>
                <td>{equip.recentProjects}</td>
                <td>{equip.whsInfo}</td>
                <td>{equip.bookedTime}</td>
              </tr>
            )
          })
        }
    </table>
  </>
)

export default Profile