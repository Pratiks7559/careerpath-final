import React, { useEffect, useState } from 'react';
import './Resources.css';
import {
  FaHome, FaRobot, FaSignOutAlt, FaChartLine, FaBook, FaUser,
  FaGraduationCap, FaBriefcase, FaNetworkWired, FaLaptopCode
} from 'react-icons/fa';
import CareerPathLogo from './CareerPathLogo';
import axios from 'axios';

const categories = {
  youtube: { label: "YouTube Videos", icon: <FaRobot /> },
  books: { label: "Free Books", icon: <FaBook /> },
  courses: { label: "Free Courses", icon: <FaGraduationCap /> },
  websites: { label: "Career Websites", icon: <FaBriefcase /> },
  networking: { label: "Networking Opportunities", icon: <FaNetworkWired /> },
  jobs: { label: "Job Platforms", icon: <FaLaptopCode /> },
  advice: { label: "Career Advice", icon: <FaRobot /> },
};

const ResourceSection = ({ category, icon, children }) => (
  <section className="resource-category">
    <h3 className='resource-category-title'>{icon} {category}</h3>
    <div className='resource-category'>{children}</div>
  </section>
);

function Resources() {
  const [youtubeVideos, setYoutubeVideos] = useState([]);
  const [activeFilter, setActiveFilter] = useState('youtube'); // only one active

  const fetchYouTubeVideos = async () => {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: 'youtube api key',
          part: 'snippet',
          type: 'video',
          q: 'career guidance tips opportunities growth success',
          order: 'relevance',
          maxResults: 50, // Fetch a larger pool of videos
        },
      });

      const videos = response.data.items || [];
      
      // Shuffle the videos randomly
      const shuffledVideos = videos.sort(() => Math.random() - 0.5);

      // Select 6 random videos to display
      setYoutubeVideos(shuffledVideos.slice(0, 6));
    } catch (error) {
      console.error("Error fetching YouTube videos:", error);
    }
  };

       useEffect(() => {
         fetchYouTubeVideos();
  }, []);
   
  
     useEffect(() => {
      document.body.classList.add('acc');
  
      return () => {
        document.body.classList.remove('acc');
      };
    }, []);
  

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="resources">
      <header className="top-navbar">
        <h1 className="app-logo"><CareerPathLogo/></h1>
        <nav className="nav-links">
          <a href="/dashboard" className='nav-link'><FaHome /> Home</a>
          <a href="/quiz" className='nav-link'><FaChartLine /> Quiz</a>
          <a href="/career" className='nav-link'><FaBriefcase /> Career</a>
          <a href="/resources" className='nav-link'><FaBook /> Resources</a>
          <a href="/profile" className='nav-link'><FaUser /> Profile</a>
          <a href="#" onClick={handleLogout}className='nav-link'><FaSignOutAlt /> Logout</a>
        </nav>
      </header>

      <main className="resources-content">
        <h2 className="resources-title">Career Resources</h2>

        {/* Filter Bar */}
        <div className="filter-bar ">
          {Object.entries(categories).map(([key, { label }]) => (
            <button
              key={key}
              className={`filter-btn ${activeFilter === key ? 'active' : ''}`}
              onClick={() => setActiveFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Conditionally Rendered Resource Sections */}
        {activeFilter === 'youtube' && youtubeVideos.length > 0 && (
          <ResourceSection category="Career Videos" icon={<FaRobot />}>
            <div className="video-grid">
              {youtubeVideos.map((video) => (
                <div className="video-card" key={video.id.videoId}>
                  <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} className='video-thumbnail' />
                  <h4 className='video-title'>{video.snippet.title}</h4>
                  <p className='video-description'>{video.snippet.description.slice(0, 100)}...</p>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='video-link'
                  >
                    Watch on YouTube
                  </a>
                </div>
              ))}
            </div>
          </ResourceSection>
        )}
        {activeFilter === 'books' && (
          <ResourceSection category="Free Books" icon={<FaBook />}>
            <ul className="resource-list">
  <li><a href="https://www.cs.cmu.edu/~112/index.html" target="_blank" className="resource-link">Introduction to Computer Science</a></li>
  <li><a href="https://eloquentjavascript.net/" target="_blank" className="resource-link">Eloquent JavaScript</a></li>
  <li><a href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/" target="_blank" className="resource-link">Fundamentals of Algorithms</a></li>
  <li><a href="https://github.com/EbookFoundation/free-programming-books" target="_blank" className="resource-link">Free Programming Books Collection</a></li>
  <li><a href="https://ocw.mit.edu/" target="_blank" className="resource-link">MIT OpenCourseWare Textbooks</a></li>
  <li><a href="https://www.khanacademy.org/computing/computer-programming" target="_blank" className="resource-link">Khan Academy Programming</a></li>
  <li><a href="https://open.umn.edu/opentextbooks/" target="_blank" className="resource-link">Open Textbook Library</a></li>
  <li><a href="https://bookboon.com/" target="_blank" className="resource-link">Bookboon Educational Books</a></li>
  <li><a href="https://www.pdfdrive.com/" target="_blank" className="resource-link" >PDFDrive Career Books</a></li>
  <li><a href="https://www.springer.com/gp/free-access-to-textbooks" target="_blank" className="resource-link">Springer Free Textbooks</a></li>
</ul>

          </ResourceSection>
        )}

        {activeFilter === 'courses' && (
          <ResourceSection category="Free Courses" icon={<FaGraduationCap />}>
           <ul className="resource-list">
  <li><a href="https://www.coursera.org/" target="_blank" className="resource-link">Coursera Career Development</a></li>
  <li><a href="https://www.edx.org/" target="_blank" className="resource-link">edX Career Planning Courses</a></li>
  <li><a href="https://www.udemy.com/" target="_blank" className="resource-link">Udemy Skill Courses</a></li>
  <li><a href="https://www.skillshare.com/" target="_blank" className="resource-link">Skillshare Learning Paths</a></li>
  <li><a href="https://www.futurelearn.com/" target="_blank" className="resource-link">FutureLearn Career Courses</a></li>
  <li><a href="https://www.alison.com/" target="_blank" className="resource-link">Alison Employability Skills</a></li>
  <li><a href="https://grow.google/" target="_blank" className="resource-link">Google Career Certificates</a></li>
  <li><a href="https://www.khanacademy.org/" target="_blank" className="resource-link">Khan Academy Career Skills</a></li>
  <li><a href="https://www.codecademy.com/" target="_blank" className="resource-link">Codecademy Career Paths</a></li>
  <li><a href="https://learn.microsoft.com/en-us/training/" target="_blank" className="resource-link">Microsoft Learn Career Courses</a></li>
</ul>

          </ResourceSection>
        )}

        {activeFilter === 'websites' && (
          <ResourceSection category="Career Websites" icon={<FaBriefcase />}>
           <ul  className="resource-list">
  <li><a href="https://www.careeronestop.org/" target="_blank" className="resource-link">CareerOneStop</a></li>
  <li><a href="https://www.naukri.com/" target="_blank" className="resource-link" >Naukri.com</a></li>
  <li><a href="https://www.linkedin.com/jobs/" target="_blank" className="resource-link">LinkedIn Jobs</a></li>
  <li><a href="https://www.monster.com/" target="_blank" className="resource-link">Monster</a></li>
  <li><a href="https://www.indeed.com/career-advice" target="_blank" className="resource-link">Indeed Career Guide</a></li>
  <li><a href="https://targetjobs.co.uk/" target="_blank" className="resource-link">TargetJobs</a></li>
  <li><a href="https://www.topuniversities.com/" target="_blank" className="resource-link">TopUniversities Career Advice</a></li>
  <li><a href="https://www.myperfectresume.com/" target="_blank" className="resource-link">MyPerfectResume</a></li>
  <li><a href="https://www.jobscan.co/" target="_blank" className="resource-link">Jobscan Resume Optimizer</a></li>
  <li><a href="https://zety.com/" target="_blank" className="resource-link">Zety Resume Builder</a></li>
</ul>

          </ResourceSection>
        )}

        {activeFilter === 'networking' && (
          <ResourceSection category="Networking Opportunities" icon={<FaNetworkWired />}>
           <ul className="resource-list">
  <li><a href="https://www.linkedin.com/" target="_blank" className="resource-link">LinkedIn</a></li>
  <li><a href="https://www.meetup.com/" target="_blank"className="resource-link">Meetup Groups</a></li>
  <li><a href="https://discord.com/" target="_blank" className="resource-link">Discord Communities</a></li>
  <li><a href="https://www.reddit.com/r/careerguidance/" target="_blank" className="resource-link">Reddit Career Guidance</a></li>
  <li><a href="https://twitter.com/" target="_blank" className="resource-link">Twitter/X Spaces</a></li>
  <li><a href="https://www.facebook.com/groups/" target="_blank" className="resource-link">Facebook Career Groups</a></li>
  <li><a href="https://www.slack.com/" target="_blank" className="resource-link">Slack Professional Groups</a></li>
  <li><a href="https://www.eventbrite.com/" target="_blank" className="resource-link">Eventbrite Career Events</a></li>
  <li><a href="https://www.careermatch.com/" target="_blank" className="resource-link">CareerMatch</a></li>
  <li><a href="https://www.womenwhocode.com/" target="_blank" className="resource-link">Women Who Code</a></li>
</ul>

          </ResourceSection>
        )}

        {activeFilter === 'jobs' && (
          <ResourceSection category="Job Platforms" icon={<FaLaptopCode />}>
           <ul className='resource-list'>
  <li><a href="https://www.indeed.com/" target="_blank" className="resource-link">Indeed</a></li>
  <li><a href="https://www.linkedin.com/" target="_blank"className="resource-link">LinkedIn</a></li>
  <li><a href="https://www.glassdoor.com/" target="_blank"className="resource-link">Glassdoor</a></li>
  <li><a href="https://angel.co/jobs" target="_blank">AngelList</a></li>
  <li><a href="https://remoteok.com/" target="_blank"className="resource-link">Remote OK</a></li>
  <li><a href="https://weworkremotely.com/" target="_blank"className="resource-link">We Work Remotely</a></li>
  <li><a href="https://internshala.com/" target="_blank"className="resource-link">Internshala</a></li>
  <li><a href="https://www.hireable.com/" target="_blank"className="resource-link">Hireable</a></li>
  <li><a href="https://www.simplyhired.com/" target="_blank"className="resource-link">SimplyHired</a></li>
  <li><a href="https://www.flexjobs.com/" target="_blank"className="resource-link">FlexJobs</a></li>
</ul>

          </ResourceSection>
        )}

        {activeFilter === 'advice' && (
          <ResourceSection category="Career Advice" icon={<FaRobot />}>
            <ul className='resource-list'>
  <li><a href="https://www.themuse.com/advice" target="_blank" className="resource-link">The Muse Career Advice</a></li>
  <li><a href="https://hbr.org/" target="_blank"className="resource-link">Harvard Business Review</a></li>
  <li><a href="https://careersidekick.com/" target="_blank"className="resource-link">Career Sidekick</a></li>
  <li><a href="https://www.monster.com/career-advice/" target="_blank"className="resource-link">Monster Career Tips</a></li>
  <li><a href="https://biginterview.com/blog/career-advice" target="_blank"className="resource-link">Big Interview Blog</a></li>
  <li><a href="https://www.indeed.com/career-advice" target="_blank"className="resource-link">Indeed Career Advice</a></li>
  <li><a href="https://www.livecareer.com/resources/careers/planning" target="_blank"className="resource-link">LiveCareer Planning</a></li>
  <li><a href="https://zety.com/blog/career" target="_blank"className="resource-link">Zety Career Blog</a></li>
  <li><a href="https://topresume.com/career-advice" target="_blank"className="resource-link">TopResume Advice</a></li>
  <li><a href="https://www.glassdoor.com/blog/" target="_blank"className="resource-link">Glassdoor Blog</a></li>
</ul>

          </ResourceSection>
        )}
      </main>
    </div>
  );
}

export default Resources;
