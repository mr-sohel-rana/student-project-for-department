import React from 'react';
import img1 from '../image/image1.JPG';

const Home = () => {
  return (
    <>
      <div 
        style={{ backgroundImage: `url(${img1})` }} 
        className="bg-cover bg-center h-screen items-start justify-center text-white"
      >
        <div className="flex items-center bg-black bg-opacity-50 w-full  h-full">
          <div className="text-center p-4   rounded-lg w-full lg:w-1/2 lg:pl-20">
            <h4 className='text-2xl lg:text-3xl font-bold'>PABNA UNIVERSITY OF SCIENCE AND TECHNOLOGY</h4>
            <p className='text-sm lg:text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Blanditiis porro dolorum nisi recusandae sunt vero iusto nemo illo itaque, 
               ea excepturi, quis veniam! Praesentium velit, dolore dicta rem nostrum assumenda!</p>
               <button className='text-black text-lg p-2 rounded-lg bg-white hover:bg-black hover:text-white'>learn more...</button>
          </div>
        </div>
      </div>

<section className=''>
  <h1 className='text-center text-3xl p-5 lg:text-4xl lg:p-5 w-fill '>Our Programs</h1>

  <div className='  md:flex lg:flex overflow-hidden'>
    <div className="text-xl lg:w-1/2 lg:text-3xl p-10">
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus officia dolorum quos facilis, doloremque id minimalaborum corrupti qui ea molestias eosquasi deserunt optio sequi itaque voluptas et pariatur.</p>
<button className='text-white mt-5 text-lg p-2 rounded-lg bg-black hover:bg-red-500 hover:text-black'>learn more...</button>
    </div>

    <div className="img-box lg:w-1/2">
      <img src={img1} alt='image'></img>
      <img className='lg:ml-36 lg:mt-[-230px] md:ml-36 md:mt-[-230px] mt-5' src={img1} alt='image'></img>

    </div>
  </div>

</section>

<section>
  <h1 className='text-center text-4xl p-10'>Features event</h1>
  <h2 className='text-center p-2 lg:text-4xl  md:text-3xl  sm:text-2xl text-xl  font-bold'>PABNA UNIVERSIT OF SCIRENCE AND TECHNOLOGY PABNA-PUST</h2>
  <p className='text-center lg:text-2xl font-bold'>Rajapur , Pabna Sador , Pabna</p>
  <p className='text-center lg:pl-60 lg:pr-60 lg:text-xl text-sm p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aperiam quos at perspiciatis sed ex aliquid vitae necessitatibus, veniam ut accusantium temporibus odit recusandae labore quo, molestiae tempore neque adipisci ad a explicabo saepe. Provident tenetur fuga modi libero laborum!</p>
</section>

<section className='md:p-10 p-5'>
  <div className="box sm:flex">
  <div className="text w-full md:w-1/2">
<h1 className='text-center md:text-4xl sm:text-3xl text-2xl font-bold'>Alumni Program Serivices</h1>
<p className='text-left p-5 text-xl font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, molestias nesciunt! Temporibus, facere perferendis? Atque quis nam iste similique sunt quaerat repudiandae! Tempora, quasi nemo! Possimus commodi atque natus sequi.</p>
<ul className='text-center'>
  <li>Lorem ipsum dolor sit amet.</li>
  <li>Lorem ipsum dolor sit amet.</li>
  <li>Lorem ipsum dolor sit amet.</li>
  <li>Lorem ipsum dolor sit amet.</li>
  <li>Lorem ipsum dolor sit amet.</li>
</ul>
<button className='text-white mt-5 ml-20 text-lg p-2 rounded-lg bg-black hover:bg-red-500 hover:text-black'>learn more...</button> 
<button className='text-white mt-5 ml-5 text-lg p-2 rounded-lg bg-black hover:bg-red-500 hover:text-black'>learn more...</button>
  </div>

  <div className="ibox md:w-1/2 lg:w-1/2 w-full md:flex lg:flex ">
  <img className='md:w-1/2 lg:w-1/2 w-full p-3' src={img1} alt='image'></img>
  <img className='md:w-1/2 lg:w-1/2 w-full p-3' src={img1} alt='image'></img>
  </div>


  </div>
  
</section>

<section>
  <h1 className='text-center text-4xl font-bold pb-10'>SUCCESFULL STORIES</h1>
  <div className=" lg:p-10 items-center  grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-14 ml-14 lg:gap-10">

    <div className="w-80 items-center bg-gray-400 text-white text-center ">
      <img className='w-48 h-48 items-center mx-auto pt-5 rounded-full' src={img1} alt='image'></img>
      <h2>Softwere Engineer | Year 2025</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellat deleniti veniam eveniet corrupti alias necessitatibus ratione possimus perferendis officia?
      </p>
      <button className='text-white mb-5 mt-5 ml-5 text-lg p-2 rounded-lg bg-black hover:bg-red-500 hover:text-black'>learn more...</button>
    </div>
    <div className="w-80 bg-gray-400 text-white text-center ">
      <img className='w-48 h-48 items-center mx-auto pt-5 rounded-full' src={img1} alt='image'></img>
      <h2>Softwere Engineer | Year 2025</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellat deleniti veniam eveniet corrupti alias necessitatibus ratione possimus perferendis officia?
      </p>
      <button className='text-white mb-5 mt-5 ml-5 text-lg p-2 rounded-lg bg-black hover:bg-red-500 hover:text-black'>learn more...</button>
    </div>
    <div className="w-80 bg-gray-400 text-white text-center ">
      <img className='w-48 h-48 items-center mx-auto pt-5 rounded-full' src={img1} alt='image'></img>
      <h2>Softwere Engineer | Year 2025</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellat deleniti veniam eveniet corrupti alias necessitatibus ratione possimus perferendis officia?
      </p>
      <button className='text-white mb-5 mt-5 ml-5 text-lg p-2 rounded-lg bg-black hover:bg-red-500 hover:text-black'>learn more...</button>
    </div>
    <div className="w-80 bg-gray-400 text-white text-center ">
      <img className='w-48 h-48 items-center mx-auto pt-5 rounded-full' src={img1} alt='image'></img>
      <h2>Softwere Engineer | Year 2025</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellat deleniti veniam eveniet corrupti alias necessitatibus ratione possimus perferendis officia?
      </p>
      <button className='text-white mb-5 mt-5 ml-5 text-lg p-2 rounded-lg bg-black hover:bg-red-500 hover:text-black'>learn more...</button>
    </div>
    <div className="w-80 bg-gray-400 text-white text-center ">
      <img className='w-48 h-48 items-center mx-auto pt-5 rounded-full' src={img1} alt='image'></img>
      <h2>Softwere Engineer | Year 2025</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellat deleniti veniam eveniet corrupti alias necessitatibus ratione possimus perferendis officia?
      </p>
      <button className='text-white mb-5 mt-5 ml-5 text-lg p-2 rounded-lg bg-black hover:bg-red-500 hover:text-black'>learn more...</button>
    </div>
    <div className="w-80 bg-gray-400 text-white text-center ">
      <img className='w-48 h-48 items-center mx-auto pt-5 rounded-full' src={img1} alt='image'></img>
      <h2>Softwere Engineer | Year 2025</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellat deleniti veniam eveniet corrupti alias necessitatibus ratione possimus perferendis officia?
      </p>
      <button className='text-white mb-5 mt-5 ml-5 text-lg p-2 rounded-lg bg-black hover:bg-red-500 hover:text-black'>learn more...</button>
    </div>
     


  </div>
</section>

    </>
  );
}

export default Home;
