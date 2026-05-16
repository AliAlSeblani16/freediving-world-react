import homeImage from "../assets/images/1.jpg";

function Home() {
  return (
    <main>
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${homeImage})` }}
      >
        <div className="hero-text">
          <h1>FREEDIVING</h1>
          <p>Explore the ocean on a single breath</p>
        </div>
      </section>

      <section className="home-content">
        <h2>What is Freediving?</h2>

        <p>
          Freediving is a form of underwater diving that relies on
          breath-holding rather than the use of breathing equipment such as scuba
          tanks. Divers descend beneath the surface using a single breath, making
          it one of the most natural and traditional ways of exploring the
          ocean.
        </p>

        <p>
          Unlike other types of diving, freediving emphasizes relaxation,
          efficient movement, and mental control. Divers must learn to manage
          their breathing, heart rate, and body position in order to conserve
          oxygen and stay underwater for longer periods.
        </p>

        <p>
          Freediving is practiced both as a recreational activity and a
          competitive sport. In recreational freediving, individuals explore
          marine life and underwater environments in a peaceful and immersive
          way. In competitive freediving, athletes aim to reach greater depths,
          distances, or time limits while holding their breath.
        </p>

        <p>
          Overall, freediving is not only a physical activity but also a mental
          discipline that promotes calmness, focus, and a deep connection with
          the ocean.
        </p>
      </section>

      <section className="home-content">
        <h2>Why Freediving?</h2>

        <p>
          Freediving offers a unique combination of physical, mental, and
          emotional benefits. Unlike many other sports, it encourages individuals
          to slow down, focus on their breathing, and develop a strong connection
          with their body and the surrounding environment.
        </p>

        <ul>
          <li>
            <strong>Improves Breath Control:</strong> Freediving training helps
            increase lung capacity and teaches efficient breathing techniques.
          </li>
          <li>
            <strong>Enhances Mental Focus:</strong> Divers learn to stay calm
            and focused underwater, which improves concentration and reduces
            stress.
          </li>
          <li>
            <strong>Builds Physical Endurance:</strong> Regular practice
            strengthens the body and improves overall fitness and stamina.
          </li>
          <li>
            <strong>Connection with Nature:</strong> Freediving allows people to
            explore the ocean quietly and respectfully, creating a deep
            appreciation for marine life.
          </li>
          <li>
            <strong>Promotes Relaxation:</strong> The slow breathing and calm
            environment help reduce anxiety and promote mental well-being.
          </li>
        </ul>

        <p>
          For many people, freediving becomes more than just a sport—it becomes a
          way to relax, disconnect from daily stress, and experience the
          underwater world in a peaceful and meaningful way.
        </p>
      </section>

      <section className="home-content">
        <h2>Freediving as a Sport</h2>

        <p>
          As well as the perfect way to relax at the weekend, freediving is an
          international competitive sport. Professional freedivers exploit the
          body's diving adaptations to go to depths of over 200m on a single
          breath.
        </p>

        <p>
          These diving reflexes help conserve oxygen by restricting the blood
          flow to your extremities, conserving it for your vital organs. Since
          1992, AIDA have been organising freediving competitions around the
          world, making the sport safer but as competitive as ever.
        </p>

        <p>
          Freediving competitions also bring the community of freedivers
          together, where they can share their knowledge and experience with
          other like-minded people.
        </p>
      </section>
    </main>
  );
}

export default Home;