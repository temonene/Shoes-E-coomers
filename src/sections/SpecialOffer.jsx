import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img src={offer} width={773} height={687} className="object-contain w-full"/>
      </div>
      <div className="flex flex-1 flex-col">
           <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg"> 
            <span className="text-coral-red"> Special </span>Offer
           </h2>
           <p className="mt-4 lg:max-w-lg info-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, dolore impedit provident suscipit vitae ipsam
              dignissimos quibusdam voluptatibus veniam quia omnis. Sed unde
              sapiente ipsum officiis asperiores eos voluptas eaque
           </p>
           <div className="mt-11 flex felx-wrap gap-4">
           <Button label="Shop Now" iconURL={arrowRight}/>
           <Button label="Learn More" backgoundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray'/>
           </div>
           </div>
    </section>
  )
}

export default SpecialOffer