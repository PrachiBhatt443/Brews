import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>About Us</h1>
        <p className={styles.description}>
          Welcome to Brews, where our passion for coffee meets your taste buds. Our journey started in 2010 as a small coffee shop in the heart of the city. We have grown into a beloved brand known for our exceptional coffee and warm, welcoming atmosphere. We source the finest beans from around the world and brew them to perfection, ensuring every sip is a delightful experience.
        </p>
      </div>
      
      <div className={styles.content}>
        <p className={styles.text}>
          At Brews, we believe in the power of a great cup of coffee. Our mission is to provide our customers with the highest quality coffee experience possible. We are committed to sourcing the best beans, using sustainable practices, and continuously innovating to create unique and delicious coffee blends. Our team of expert baristas is dedicated to perfecting the art of coffee making, ensuring that each cup is crafted with care and precision.
        </p>
        <p className={styles.text}>
          Over the years, we have built a strong community of coffee enthusiasts who share our love for the craft. Our coffee shop is not just a place to get your caffeine fix; it’s a place to relax, connect, and enjoy the simple pleasures of life. Whether you're here for a quick espresso, a leisurely latte, or to try one of our signature blends, we strive to make every visit memorable.
        </p>
        <p className={styles.text}>
          We take pride in our sustainability efforts and are constantly looking for ways to reduce our environmental impact. From ethically sourcing our beans to using eco-friendly packaging, we are committed to making a positive difference. Our values of quality, sustainability, community, and innovation guide everything we do, ensuring that we stay true to our mission and deliver the best possible coffee experience.
        </p>
      </div>
      
      <div className={styles.team}>
        <h2 className={styles.subTitle}>Meet Our Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <img src="team-member-1.jpg" alt="Samaira Seth" className={styles.teamMemberImage} />
            <h3 className={styles.teamMemberName}>Samaira Seth</h3>
            <p className={styles.teamMemberRole}>Founder & CEO</p>
            <p className={styles.teamMemberBio}>Samaira has over 20 years of experience in the coffee industry. She started Brews with a dream to create a community-focused coffee shop where everyone feels at home. Her passion for coffee and dedication to quality have been the driving force behind our success.</p>
          </div>
          <div className={styles.teamMember}>
            <img src="team-member-2.jpg" alt="Abhijeet Singhania" className={styles.teamMemberImage} />
            <h3 className={styles.teamMemberName}>Abhijeet Singhania</h3>
            <p className={styles.teamMemberRole}>Head Barista</p>
            <p className={styles.teamMemberBio}>Abhijeet is a master barista with a passion for creating unique coffee blends. His creativity and expertise are the heart of our innovative coffee offerings. Abhijeet's dedication to perfecting each cup ensures that our customers enjoy the best coffee experience possible.</p>
          </div>
          <div className={styles.teamMember}>
            <img src="team-member-3.jpg" alt="Ayushi Saini" className={styles.teamMemberImage} />
            <h3 className={styles.teamMemberName}>Ayushi Saini</h3>
            <p className={styles.teamMemberRole}>Marketing Director</p>
            <p className={styles.teamMemberBio}>Ayushi brings a wealth of marketing experience to the team. She is dedicated to sharing our story and connecting with our community through creative and engaging campaigns. Ayushi's innovative approach helps us reach new audiences and build lasting relationships with our customers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
