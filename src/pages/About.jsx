import aboutImage from "../assets/images/13.jpg";
import historyImage from "../assets/images/11.jpg";
import finalImage from "../assets/images/12.jpg";

function About() {
  return (
    <main>
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${aboutImage})` }}
      >
        <div className="about-content">
          <h1>ABOUT</h1>
          <p>Learn about Freediving</p>
        </div>
      </section>

      <section className="about-text">
        <p>
          Freediving is a form of underwater diving that relies entirely on
          breath-holding rather than the use of breathing equipment. It is one
          of the most natural ways humans can explore the ocean, allowing divers
          to move silently and freely underwater.
        </p>

        <p>
          Unlike other types of diving, freediving focuses on relaxation,
          control, and efficiency. Divers train their bodies and minds to
          conserve oxygen, slow their heart rate, and remain calm while
          underwater. This balance between physical ability and mental discipline
          makes freediving a unique and rewarding experience.
        </p>

        <h2>History of Freediving</h2>

        <p>
          Freediving has been practiced for thousands of years by ancient
          civilizations for survival purposes such as fishing, pearl diving, and
          gathering food from the sea. In many coastal cultures, divers developed
          remarkable breath-holding abilities to support their communities.
        </p>

        <p>
          In modern times, freediving has evolved into both a recreational
          activity and a competitive sport. With the development of safety
          techniques and training methods, freediving is now practiced worldwide
          by people seeking adventure, relaxation, and a deeper connection with
          the ocean.
        </p>
      </section>

      <section
        className="history-hero"
        style={{ backgroundImage: `url(${historyImage})` }}
      >
        <div className="history-text">
          <h1>SINCE 1992</h1>
          <p>
            We wanted a strong community and we wanted to create a stable and
            safe set of rules and guidelines for competitions and record
            attempts.
          </p>
        </div>
      </section>

      <section className="about-final">
        <h2>Freediving Today</h2>

        <p>
          Freediving has grown into a global activity practiced by people all
          over the world. It is no longer only a survival skill but also a sport,
          a form of relaxation, and a way to connect deeply with the ocean.
        </p>

        <p>
          Today, freediving is supported by international organizations that
          organize competitions, establish safety rules, and promote proper
          training. Divers continuously improve techniques, safety standards, and
          knowledge about the human body’s response to deep diving.
        </p>

        <p>
          Beyond sport, freediving also contributes to scientific research.
          Divers participate in studies that help improve safety guidelines and
          expand our understanding of how the body reacts underwater.
          Environmental awareness is also a key part of modern freediving,
          encouraging respect and protection of marine ecosystems.
        </p>

        <p>
          Freediving is often misunderstood as a dangerous activity, but in
          reality, it is a safe and controlled discipline when practiced
          correctly. It combines relaxation, focus, training, and teamwork,
          making it both challenging and rewarding.
        </p>

        <p>
          Today, freediving brings together a global community of divers who
          share the same passion for the ocean, creating a unique balance between
          adventure, inner peace, and connection with nature.
        </p>
      </section>

      <section
        className="final-hero"
        style={{ backgroundImage: `url(${finalImage})` }}
      >
        <div className="final-text">
          <h1>FREEDIVERS</h1>
          <p>Freediving is all about the ocean and about helping its development</p>
        </div>
      </section>

      <section className="about-future">
        <h2>Freediving Tomorrow</h2>

        <p>
          Freediving has evolved from an individual practice into a global
          community. In the past, divers were isolated, but today they are united
          by a shared passion for the ocean and exploration. This connection
          allows knowledge, safety practices, and techniques to be shared
          worldwide.
        </p>

        <p>
          Modern freediving continues to grow through cooperation between
          organizations, instructors, and divers. The goal is not only to improve
          performance, but also to develop the sport in a safe, sustainable, and
          inclusive way for future generations.
        </p>

        <p>
          Over the years, freedivers have worked together to establish rules,
          competitions, and educational systems. This collective effort has
          created a strong global community built on trust, respect, and shared
          experience.
        </p>

        <p>
          Looking forward, freediving is about more than records. It is about
          emotions, connection, and respect for the ocean. It brings people
          together, encourages environmental awareness, and promotes a deeper
          understanding of the natural world.
        </p>

        <p>
          The future of freediving lies in continuing to grow this community,
          sharing knowledge, and inspiring others to discover the beauty and
          peace found beneath the surface.
        </p>
      </section>
    </main>
  );
}

export default About;