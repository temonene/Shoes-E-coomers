import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
    <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">Sign Up For <span className="text-coral-red">Updates </span>& Newsletter</h3>
    <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 border sm:border-slate-gray rounded-full justify-between ">

    <input type="text" placeholder="YourEmail@gmail.com" />
    <div className="flex max-sm:justify-end items-start max-sm:w-full sm:justify-center">
      <Button label="Sign Up"/>
    </div>

    </div>
    
    </section>
  )
}

export default Subscribe