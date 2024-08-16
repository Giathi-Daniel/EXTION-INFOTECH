import {formatISO9075} from "date-fns"
import {Link} from "react-router-dom"

const Post = ({_id,title, summary, cover, content, createdAt, author}) => {

  return (
    <>
        <div className="post">
        <div className="img">
          <Link to={`/post/${_id}`}>
            <img src={'http://localhost:4000/'+cover} alt="img" />
          </Link>
        </div>
        <div className="texts">
          <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
          </Link>
        <p className="info">
          <span className="author">{author.username}</span>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
        </div>
      </div>
      {/* <div className="post">
        <img src="https://www.techflow.com/wp-content/uploads/2024/06/DALL%C2%B7E-2024-06-24-12.59.19-A-detailed-illustration-of-a-microgrid-on-a-U.S.-military-base-in-a-16_9-aspect-ratio.-The-base-should-feature-elements-such-as-barracks-command-cent.webp" alt="img" />
        <h2>The Rise of AI: How Artificial Intelligence is Shaping Our Future</h2>
        <p>Dive into the world of artificial intelligence and explore its impact on various industries. From healthcare to finance, AI is transforming the way we live and work. This post will cover recent advancements, real-world applications, and potential future trends.</p>
      </div>
      <div className="post">
        <img src="https://www.techflow.com/wp-content/uploads/2024/06/DALL%C2%B7E-2024-06-24-12.59.19-A-detailed-illustration-of-a-microgrid-on-a-U.S.-military-base-in-a-16_9-aspect-ratio.-The-base-should-feature-elements-such-as-barracks-command-cent.webp" alt="img" />
        <h2>Technology: What It Means for Your Connected Life</h2>
        <p>Discover the benefits and challenges of 5G technology. This post will explain how 5G differs from its predecessors, the improvements it brings to connectivity, and what you can expect in terms of speed and latency. We’ll also discuss potential impacts on everyday devices and applications.</p>
      </div>
      <div className="post">
        <img src="https://www.techflow.com/wp-content/uploads/2024/06/DALL%C2%B7E-2024-06-24-12.59.19-A-detailed-illustration-of-a-microgrid-on-a-U.S.-military-base-in-a-16_9-aspect-ratio.-The-base-should-feature-elements-such-as-barracks-command-cent.webp" alt="img" />
        <h2>The Evolution of Smartphones: From Brick Phones to Foldables</h2>
        <p>Take a journey through the history of smartphones, tracing their evolution from bulky brick phones to sleek, foldable devices. This post will highlight key milestones, technological advancements, and the future of mobile technology.</p>
      </div>
      <div className="post">
        <img src="https://www.techflow.com/wp-content/uploads/2024/06/DALL%C2%B7E-2024-06-24-12.59.19-A-detailed-illustration-of-a-microgrid-on-a-U.S.-military-base-in-a-16_9-aspect-ratio.-The-base-should-feature-elements-such-as-barracks-command-cent.webp" alt="img" />
        <h2>Cybersecurity Best Practices: How to Protect Your Digital Life</h2>
        <p> Learn essential tips for safeguarding your online presence and personal data. This post will cover strategies for creating strong passwords, recognizing phishing attempts, and using two-factor authentication. Stay informed and keep your digital life secure.</p>
      </div> */}
    </>
  )
}

export default Post