import "./MailList.css";

const MailList = () => {
  return (
    <div className="Maillist">
      <div>
        <p className="mailTitel">Save time, save money!</p>
        <span className="mailDesc">
          Sign up and we'll send the best deals to you
        </span>
      </div>

      <div className="mailInputContainer">
        <input type="email" placeholder="Your email address" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
