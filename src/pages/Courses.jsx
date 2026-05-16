function Courses({ setCurrentPage, setSelectedCourse }) {
  function handleBookNow(courseName) {
    setSelectedCourse(courseName);
    setCurrentPage("contact");
  }

  return (
    <main>
      <section className="courses-hero">
        <div className="courses-content">
          <h1>COURSES</h1>
          <p>Learn Freediving Step by Step</p>
        </div>
      </section>

      <section className="course-content">
        <h2>Beginner Freediving (AIDA 1)</h2>
        <p><strong>Duration:</strong> 1–2 Days</p>
        <p><strong>Price:</strong> $250</p>
        <p><strong>Location:</strong> Local Pool / Shallow Open Water</p>
        <p><strong>Schedule:</strong> Weekends Available</p>

        <p>
          The AIDA 1 course is designed for complete beginners who want to
          experience freediving in a safe and controlled environment.
        </p>

        <ul>
          <li>Basic breathing and relaxation techniques</li>
          <li>Introduction to equalization</li>
          <li>Pool or shallow water practice</li>
          <li>Fundamental safety awareness</li>
        </ul>

        <button onClick={() => handleBookNow("Beginner Freediving - AIDA 1")}>
          Book Now
        </button>
      </section>

      <section className="course-content">
        <h2>Advanced Freediving (AIDA 2)</h2>
        <p><strong>Duration:</strong> 2–3 Days</p>
        <p><strong>Price:</strong> $400</p>
        <p><strong>Location:</strong> Open Water</p>
        <p><strong>Schedule:</strong> Flexible Dates</p>

        <p>
          The AIDA 2 course builds on the basics and introduces structured
          freediving training.
        </p>

        <ul>
          <li>Advanced breathing and relaxation</li>
          <li>Equalization techniques</li>
          <li>Open water diving experience</li>
          <li>Depth training up to 16–20 meters</li>
        </ul>

        <button onClick={() => handleBookNow("Advanced Freediving - AIDA 2")}>
          Book Now
        </button>
      </section>

      <section className="course-content">
        <h2>Master Freediving (AIDA 4)</h2>
        <p><strong>Duration:</strong> 4–5 Days</p>
        <p><strong>Price:</strong> $700</p>
        <p><strong>Location:</strong> Deep Open Water</p>
        <p><strong>Schedule:</strong> On Request</p>

        <p>
          The AIDA 4 course is an advanced training program for experienced
          freedivers.
        </p>

        <ul>
          <li>Deep diving techniques</li>
          <li>Advanced equalization methods</li>
          <li>Breath-hold training up to 3+ minutes</li>
          <li>Depth training around 30–40 meters</li>
        </ul>

        <button onClick={() => handleBookNow("Master Freediving - AIDA 4")}>
          Book Now
        </button>
      </section>

      <section className="course-content">
        <h2>What You Will Learn</h2>

        <p>
          Our freediving courses are designed to build both your physical ability
          and mental control, helping you become a confident, relaxed, and safe
          diver in any environment.
        </p>

        <h3>Breathing and Relaxation</h3>
        <ul>
          <li>Proper breathing techniques before diving</li>
          <li>Relaxation methods to reduce heart rate</li>
          <li>Oxygen conservation techniques</li>
        </ul>

        <h3>Static Apnea</h3>
        <ul>
          <li>Breath-hold training in a controlled setting</li>
          <li>Improving mental focus and calmness</li>
          <li>Understanding your personal limits</li>
        </ul>

        <h3>Dynamic Apnea</h3>
        <ul>
          <li>Swimming underwater efficiently</li>
          <li>Improving endurance and technique</li>
          <li>Reducing energy consumption while moving</li>
        </ul>

        <h3>Equalization and Depth Control</h3>
        <ul>
          <li>Techniques to equalize ear pressure</li>
          <li>Safe and controlled descent methods</li>
          <li>Improving comfort at deeper depths</li>
        </ul>

        <h3>Safety Training</h3>
        <ul>
          <li>Buddy system and diving procedures</li>
          <li>Basic rescue and emergency response</li>
          <li>Recognizing limits and avoiding risks</li>
        </ul>
      </section>

      <section className="course-content">
        <h2>Requirements & Why Train With Us</h2>

        <p>
          Our courses are open to everyone and focus on safety, learning, and
          enjoyment.
        </p>

        <h3>Requirements</h3>
        <ul>
          <li>Basic swimming ability</li>
          <li>Minimum age: 16+</li>
          <li>Medical clearance if needed</li>
        </ul>

        <h3>Why Train With Us?</h3>
        <ul>
          <li>Certified AIDA instructors</li>
          <li>Small group sizes for better learning</li>
          <li>Strong focus on safety and technique</li>
          <li>Friendly and supportive environment</li>
        </ul>
      </section>

      <section className="course-content">
        <h2>What Our Students Say</h2>

        <p>
          <strong>"Amazing experience!"</strong>
          <br />
          I felt completely safe and learned more than I expected – Sarah
        </p>

        <p>
          <strong>"Professional and fun"</strong>
          <br />
          The instructors were incredible and clear – Hussein
        </p>

        <p>
          <strong>"Great learning environment"</strong>
          <br />
          Small groups made learning easier – Hassan
        </p>

        <p>
          <strong>"Safe and supportive"</strong>
          <br />
          I felt comfortable from the start – Alex
        </p>

        <p>
          <strong>"Highly recommended"</strong>
          <br />
          One of the best experiences I’ve had – Nour
        </p>

        <p>
          <strong>"Perfect introduction"</strong>
          <br />
          Very clear and beginner friendly – Youssef
        </p>
      </section>
    </main>
  );
}

export default Courses;