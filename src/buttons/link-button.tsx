interface LinkButtonProps {
    label: string;
    href: string;
  }
  
  export default function LinkButton({ label, href }: LinkButtonProps) {
    return (
      <>
        <style>{`
          .custom-button {
            padding: 0.1em 0.25em;
            width: 10em;
            height: 4.5em;
            background-color: #212121;
            border: 0.08em solid #fff;
            border-radius: 0.5em;
            font-size: 12px;
            cursor: pointer;
          }
          .custom-button span {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            bottom: 0.4em;
            width: 6.25em;
            height: 2em;
            background-color: #212121;
            border-radius: 0.2em;
            font-size: 1.5em;
            color: #fff;
            border: 0.08em solid #fff;
            box-shadow: 0 0.4em 0.1em 0.019em #fff;
          }
          .custom-button span:hover {
            transition: all 0.5s;
            transform: translate(0, 0.4em);
            box-shadow: 0 0 0 0 #fff;
          }
          .custom-button span:not(:hover) {
            transition: all 1s;
          }
        `}</style>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <button className="custom-button">
            <span>{label}</span>
          </button>
        </a>
      </>
    );
  }