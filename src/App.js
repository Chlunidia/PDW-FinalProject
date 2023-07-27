import React from 'react';
import './App.css';
import ChoiHyunSukImage from './assets/choi-hyun-suk.jpg';
import JihoonImage from './assets/jihoon.jpg';
import YoshiImage from './assets/yoshi.jpg';
import JunkyuImage from './assets/junkyu.jpeg';
import MashihoImage from './assets/mashiho.jpeg';
import YoonJaeHyukImage from './assets/yoon-jae-hyuk.jpeg';
import AsahiImage from './assets/asahi.jpeg';
import BangYedamImage from './assets/bang-yedam.jpg';
import HarutoImage from './assets/haruto.jpeg';
import DoyoungImage from './assets/doyoung.jpg';
import JeongwooImage from './assets/jeongwoo.jpg';
import JunghwanImage from './assets/junghwan.jpeg';

// Array of member data
const members = [
  {
    name: ' Choi Hyun-suk',
    position: 'Leader, Rapper',
    birthdate: 'April 21, 1999',
    image: ChoiHyunSukImage,
  },
  {
    name: ' Park Jihoon',
    position: 'Vocalist',
    birthdate: 'March 14, 2000',
    image: JihoonImage,
  },
  {
    name: 'Kanemoto Yoshinori',
    position: 'Main Dancer, Rapper',
    birthdate: 'May 15, 2000',
    image: YoshiImage,
  },
  {
    name: 'Kim Junkyu',
    position: 'Vocalist',
    birthdate: 'September 9, 2000',
    image: JunkyuImage,
  },
  {
    name: 'Takata Mashiho',
    position: 'Vocalist',
    birthdate: 'March 25, 2001',
    image: MashihoImage,
  },
  {
    name: 'Yoon Jaehyuk',
    position: 'Vocalist',
    birthdate: 'July 23, 2001',
    image: YoonJaeHyukImage,
  },
  {
    name: 'Hamada Asahi',
    position: 'Vocalist',
    birthdate: 'August 20, 2001',
    image: AsahiImage,
  },
  {
    name: 'Bang Yedam',
    position: 'Main Vocalist',
    birthdate: 'May 7, 2002',
    image: BangYedamImage,
  },
  {
    name: 'Watanabe Haruto',
    position: 'Lead Rapper',
    birthdate: 'April 5, 2004',
    image: HarutoImage,
  },
  {
    name: 'Kim Doyoung',
    position: 'Vocalist',
    birthdate: 'December 4, 2004',
    image: DoyoungImage,
  },
  {
    name: 'Park Jeongwoo',
    position: 'Vocalist',
    birthdate: 'September 28, 2004',
    image: JeongwooImage,
  },
  {
    name: 'So Junghwan',
    position: 'Main Vocalist, Maknae',
    birthdate: 'March 20, 2005',
    image: JunghwanImage,
  },
];

function App() {
  const membersPerRow = 4; // Number of members to display in one row

  return (
    <div className="App">
      <div className="container">
        <h1 className="display-4 text-center">TREASURE MEMBERS</h1> {/* Header for the application */}
        <div className="row justify-content-center"> {/* Centering the row of member cards */}
          {members.map((member, index) => (
            <div className={`col-md-${12 / membersPerRow}`} key={index}> {/* Setting column size based on members per row */}
              <div className="card h-90 mb-4 member-card"> {/* Styling for the member card */}
                <img src={member.image} alt={member.name} className="card-img-top member-image" /> {/* Member image */}
                <div className="card-body"> {/* Card content */}
                  <h2 className="card-title">{member.name}</h2> {/* Member name */}
                  <p className="card-text">Position: {member.position}</p> {/* Member position */}
                  <p className="card-text">Birthdate: {member.birthdate}</p> {/* Member birthdate */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;