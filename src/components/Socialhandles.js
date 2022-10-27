export default function Socialhandles(props) {
  return (
    <div className={`bg-${props.mode === "dark" ? "dark" : "light"}`}>
      <div>visit our Social media</div>
      <div>
        <a href="#" class="fa fa-facebook">
          facebook
        </a>
      </div>
      <div>
        <a href="#" class="fa fa-twitter">
          twitter
        </a>
      </div>
    </div>
  );
}
