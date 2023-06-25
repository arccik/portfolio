import avatar from "../assets/avatar.svg";

export default function Hero() {
  return (
    <div className="hero md:h-screen h-[100wvh] bg-base-200">
      <div className="hero-content flex-col md:flex-row-reverse">
        <img
          src={avatar}
          className="max-w-sm rounded-lg shadow-2xl md:w-full w-[300px]"
        />
        <div>
          <h1 className="text-5xl font-medium">Hi there, I'm Artur</h1>
          <p className="text-2xl font-thin m-5 ml-0">
            As a passionate Full-Stack web developer with years of experience, I
            have honed my skills in crafting sleek and intuitive designs that go
            beyond the expectations of clients. By collaborating closely, we can
            swiftly and effectively transform your vision into reality.
          </p>

          <button className="btn btn-primary">Get In Touch</button>
        </div>
      </div>
    </div>
  );
}
