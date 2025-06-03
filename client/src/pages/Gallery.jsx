import React from 'react'
import Carousel from '../components/Carousel'
import { images } from '../data'
const Gallery = () => {
  return (
    <section className="py-16"> 
    
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> 
        <h1 className='text-center text-white text-5xl font-bold mb-3'>Gallery</h1>
        <Carousel images={images}/>
        <div className="flex justify-center"> 
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4"> 
            <div className="grid gap-4">
                <div>
                    <img className="h-auto w-full rounded-lg" src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/498138260_1902359097235082_8569476965861924008_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=SXoU3hEtaU4Q7kNvwGnxWr1&_nc_oc=AdnYyT_w32-b706Ril46Xe3NCPkd26OF9ajCdM1PVfgVWbHOFXh4gAoiW4nIqm6gm2U&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=9b3M38J9sCBgXkArPWhPGA&oh=00_AfKIgAuCGyv-M6oo7FC9hilmIIDW2b6iAlAgBhlwmTOkQg&oe=6843EF56" alt=""/>
                </div>
                <div>
                    <img className="h-auto w-full rounded-lg" src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/498586625_1902359533901705_1494575735667969237_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=HR3uiUwXLOQQ7kNvwFgEI6L&_nc_oc=AdmFyTuIxxWqjBYU9BPpjU78VuT9zzLWz9PnNPPJdmaZLuB8KSjD2cEWyOaLKqz6W2c&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=9b3M38J9sCBgXkArPWhPGA&oh=00_AfItGLL0BqIvrki0U6-fSS3F1QuTmlwHLs7uabY8ysRIyA&oe=6843FA9D" alt=""/>
                </div>
                <div>
                    <img className="h-auto w-full rounded-lg" src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/498592837_1902359160568409_5937085734256340912_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=5UIJqhmHht4Q7kNvwFOpShi&_nc_oc=AdmU_0A6RUYbGNZBLvKJlfTKjYqGe_hx5lGzpO8-j0UssJgVfy51ugs-3PajFUvPuvQ&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=6RWaVkXncrGYrcQgyPvVpg&oh=00_AfKOtmnuFaqH6hmDJrwonN2hgmqBBKF0KtygH_gnUiDobA&oe=6843E2B1" alt=""/>
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto w-full rounded-lg" src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/498024291_1902359307235061_3177347733252653078_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=YXLAQOsDgcwQ7kNvwHtiAL7&_nc_oc=AdldprJk2ary5woBzUvwS-XZ7EdW8tmeLcbN85CxGA4i7OH3C-YbaF096Ah_XvhfnR8&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=6nP5nm3Dz8s9pb_G5HWKuA&oh=00_AfJ3OumoFtSNqvfmN-PBX22WANOIGKbn8Z3zcc-WQooJ-w&oe=6843F729" alt=""/>
                </div>
                <div>
                    <img className="h-auto w-full rounded-lg" src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/499516770_1902359407235051_1277799972253437587_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=ftLa1sw542oQ7kNvwExBCg2&_nc_oc=AdlTuZ9iEVuGXAFDE_KoVAqKb2uYvUW9iuEdNZ-igCvpDfltdbEeGdl8nXhXwAHRvEQ&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=MQxpnavonZpoi3HsRIx8HQ&oh=00_AfLFW1T0GcUH_p1eG1k_Rw6mdIuOAw8rIVP9EStcjDTuOg&oe=6844104E" alt=""/>
                </div>
                <div>
                    <img className="h-auto w-full rounded-lg" src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/498322119_1902359770568348_5031365209244967306_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=W3j_EurLZeAQ7kNvwFBfHqX&_nc_oc=AdmlxoclCR7TIKMpxtWWOmNx8G6Q9_uPQaedkvzBopEz96nXVWS0Le27jL7eLIu_Yk8&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=9xkeWhaTzZ6qr3A4sRHYaw&oh=00_AfIwVARIEA_wTOPZjS5hO7GAf5Yuf327EQ_8K0hANQIVag&oe=6843F3CE" alt=""/>
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto w-full rounded-lg" src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/487426672_1228217505970396_27943777018095230_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=a_nHTxLMZBcQ7kNvwFeRfa8&_nc_oc=AdndmusactenchgT7j4JZFgUKAz5Ekz33LjXsnJXoGvBV6XUv5OFqP0dbKi9EgtpWAA&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=P6hdy5zmbGE2yMZ2TSbw6A&oh=00_AfKkTCp09FWoiMOdUbgTB6Cy19S1I6GpIcx3eLLK_NLj9Q&oe=684411BF" alt=""/>
                </div>
                <div>
                    <img className="h-auto w-full rounded-lg" src="hhttps://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/487401307_1228217812637032_175173510952783567_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JA5a39IXAtwQ7kNvwFk5w3V&_nc_oc=AdlXYM1k2Tygx8nvu26Ucop58O8H6Axk0AeqtLCG5L28Rqmnnb83_h8Cyor5NAfLcM0&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=nrmf1f0O0kYlbJkPXZXqIg&oh=00_AfKytttPn7dsptcZRMfAV7S33i0-3Hon_wIT1KK9AfjWHA&oe=684401DC" alt=""/>
                </div>
                <div>
                    <img className="h-auto w-full rounded-lg" src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/487437816_1228450039280476_2052476591985519428_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=amIpkRfABZwQ7kNvwE82am-&_nc_oc=Adl04CBOLCf6St8_9vYMNStdS_Jas54tSoiyz0NkucmZsrjKHvHSeSnfQsDDuiKfbgA&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=9ZyZPwZo5uCX0KMq0J9jWw&oh=00_AfJmyU-3qHZGFiqia2DIf21N6g_pWz8b0N3g8AtybuYcTQ&oe=6843E733" alt=""/>
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto w-full rounded-lg" src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/503518577_4229733577259030_2028923441423740277_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bVf_Ujw0sVQQ7kNvwGCCgs-&_nc_oc=AdmPWoSB8-J2ql6aO_uFD0f31AS3DuUYgBarHxb4U_oTqfv2ZemZDtaX7D5LLFiCbaw&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=vhFH_6wJB0apdNenby7SMQ&oh=00_AfL66xLVgP47tDUgHYiSvK0Ib6ubDE5tap13_0mJKyuwKA&oe=6843DF72" alt=""/>
                </div>
                <div>
                    <img className="h-auto w-full rounded-lg" src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/503518577_4229733577259030_2028923441423740277_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=bVf_Ujw0sVQQ7kNvwGCCgs-&_nc_oc=AdmPWoSB8-J2ql6aO_uFD0f31AS3DuUYgBarHxb4U_oTqfv2ZemZDtaX7D5LLFiCbaw&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=vhFH_6wJB0apdNenby7SMQ&oh=00_AfL66xLVgP47tDUgHYiSvK0Ib6ubDE5tap13_0mJKyuwKA&oe=6843DF72" alt=""/>
                </div>
                <div>
                    <img className="h-auto w-full rounded-lg" src="https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/482227258_1210025761122904_4099468045873989183_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MWhUj09ewuYQ7kNvwHSw8Nt&_nc_oc=AdlXyQfL9yS7Is_dnwkcrRIl2BoKTSSwJbRZ3UWtuQdMyaIU_6XfqHd8wANWgrODsAQ&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=T0reLP0p4AeU-qx8O23AYA&oh=00_AfIUo-9JfDM7CpzWnKYjEyI-dgoQp0wcCNtEilZcxnIKLw&oe=6843EF34" alt=""/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery