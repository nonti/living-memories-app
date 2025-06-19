import Carousel from '../components/Carousel';
import { images } from '../data';
const Gallery = () => {
  return (
    <section className='' id='gallery'> 
      <div className='mx-auto max-w-6xl px-4 sm:px-6 lg:px-8'> 
        <h1 className='text-center text-amber-300 text-5xl font-bold mb-8'>Gallery</h1>
        <Carousel images={images}/>
        <div className='flex justify-center'> 
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4'> 
            <div className='grid gap-4'>
              <div>
                <img className='h-auto w-full rounded-lg' src='https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/489012096_1232769262181887_5772095266079916033_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-Wq0ZjV6YisQ7kNvwGPkBEF&_nc_oc=AdnDiGiDw2HEZZDdhDnNx-zygM19AbPGp9bOzakpS1GYTiKK7vGu-SuhcQs_54sfQc4&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=edi23HwQpq50xRxaKUMAXw&oh=00_AfNj4pjAKz7uvl84MMBPde5AGr7-zao0BoHnuTCv3o0ayA&oe=6859E48D' alt=''/>
              </div>
              <div>
                <img className='h-auto w-full rounded-lg' src='https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/487859129_1232769325515214_6859865468184937739_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=EhAJoodZWv8Q7kNvwFGl07r&_nc_oc=AdluR3FGKRhZpIIyAZje8J6LjhzqWHzfcF5M_WmkqCPuqPNN8snlhLWnqR_phaQBbXc&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=vu0AMqLSWjQo5y236F86bA&oh=00_AfPrsGAF2EK0a0K9f21TeAaB9m1xRceDiYKhMaF2ssgMVQ&oe=685A0188' alt=''/>
              </div>
              <div>
                <img className='h-auto w-full rounded-lg' src='https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/489026459_1232769422181871_1992687348663400617_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YrtpQOS1jd8Q7kNvwGv2574&_nc_oc=AdmJAEh2ek-3FRdvMDSzbxXLRwWl_P1OeOGLhtUL8qMfbwUFY8zz3RV6ifF_CJPS4Wg&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=DLJVsNdPcngAkq0wj3L0xA&oh=00_AfNnQeUFT_Fe4Tl5f5YIDfNwTrc6YMB8XKWw6qUdBeu5Tg&oe=6859DB17' alt=''/>
              </div>
            </div>
            <div className='grid gap-4'>
              <div>
                <img className='h-auto w-full rounded-lg' src='https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/493276707_1254213700037443_2048642583972519507_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Shq99jt0s1QQ7kNvwFuBNvl&_nc_oc=AdmlF7H8adbutEsocwVGYAlzUdvyyr-rkxZbUiFGpTGxxGIzcXCOyBrSQp9PnFNF_rc&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=5fX21ALNQeEC5r7M8qZzqg&oh=00_AfPFSdHmfiJU6eeCYr6a1QdLCMnG0rCpLJm8TydrwXlo5Q&oe=6859DCC8' alt=''/>
              </div>
              <div>
                <img className='h-auto w-full rounded-lg' src='https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/506450351_1350851860383721_516139854485831297_n.jpg?stp=dst-jpg_p526x395_tt6&_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=v1KLyxgB7ZUQ7kNvwEsaA-s&_nc_oc=Adm8xiwAYxW828BcDo5Vr7Kn0YKCNk04g4JTYDEz5fTz7OSYviDywwcS9njgAg3DVZU&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=qK7rwRXLsa1NYAo352W0SA&oh=00_AfPgsRemiwvATgKN41QVP_UmebUY-imYoDADnC_yoJ-UjQ&oe=6859E1A0' alt=''/>
              </div>
              <div>
                <img className='h-auto w-full rounded-lg' src='https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/494035201_1255864063205740_8144457171819880918_n.jpg?stp=cp6_dst-jpg_s600x600_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Qwph8hhfJ1MQ7kNvwHkXSjT&_nc_oc=Adm-qiuwaRZ7p5V1DS_197WtgKgQ7hQbE49dMx6Po6GEr6RY4zbIPD4Raru_-gy7WJk&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=alvTDAdu6pytykhC7Nxzbw&oh=00_AfMRHlDvmxu1GMk7PgZ2PpB3R3mTHK87BXf22mgHVqCDHw&oe=6859D635' alt=''/>
              </div>
            </div>
            <div className='grid gap-4'>
              <div>
                <img className='h-auto w-full rounded-lg' src='https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/492010605_1250527537072726_2121185597923271364_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=cnq0SOu5B5EQ7kNvwFhvjcj&_nc_oc=Adkp-BVULxiFFdHuAezII2yHhbOl4f1l_Uiaqp3bYlpYz5e14U4bxYTIMndAodaMFeE&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=cMRLgdjcxIP5wakDx3Nw0A&oh=00_AfOWClyIHqaeY5Ut7Hh5AdyQrAxQNhy1W8etRKutHiTBOg&oe=6859F7D7' alt=''/>
              </div>
              <div>
                <img className='h-auto w-full rounded-lg' src='https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/494139743_1255864413205705_6958551545068906880_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=4ev1zWaaYzMQ7kNvwHNTUWW&_nc_oc=Adl_hB6JJVaKzDGwAIDdMIRE7sdd8_UHWW7I7gpS5VSu8HAek1JoP0lG5GaRK2xTFko&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=aTloBTD9TsK3t8BNHgUaGQ&oh=00_AfOMS1_tRgBJu7rv9DznfNHriLoe2tttd5ngqRDKxJFc1Q&oe=6859EA33' alt=''/>

              </div>
              <div>
                <img className='h-auto w-full rounded-lg' src='https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/488170494_1228659445926202_936225644317704747_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wVqOYuJ4WIAQ7kNvwHs4D7T&_nc_oc=AdkQNpFuEj0YeEDUS7LdvFOhMRvr134DouseyCIQm4tDC9uM8Q6mCirwbYuMSjZbtmM&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=MrHB3ZyTZAN3tDjoZiNPag&oh=00_AfN4GXHIrwdo1GxFjSxBzl9vZT4xR8O-94aC8aOvVFh1Lw&oe=6859E6E7' alt=''/>
              </div>
            </div>
            <div className='grid gap-4'>
              <div>
                <img className='h-auto w-full rounded-lg' src='https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/494256309_1255864426539037_2585951979688101461_n.jpg?stp=cp6_dst-jpg_s600x600_tt6&_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=gPE3ACZhCUMQ7kNvwFotucz&_nc_oc=AdldfKyN6E_veWa72q3gjPiNqss60sDuV1N9ZmSWrB0p2XruyAmR0yH5iHVMQZKLc9k&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=alvTDAdu6pytykhC7Nxzbw&oh=00_AfPuipI3b3ahW2Vb_KcK0h_8r2xsOH2f46St8aJrsWqXGw&oe=6859D119' alt=''/>
                
              </div>
              <div>
                <img className='h-auto w-full rounded-lg' src='https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/476916822_4110951292470593_1787594916794780842_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=59_k60nOA5MQ7kNvwHjaytK&_nc_oc=AdltKcD7suRMKQzZtMjmaQ5VB5OEwFTiK87-gpAEilU9zLH-n-n2ThOk9SugAzK8Nck&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=G_0N7WmYVlnhN0tY6QOtfQ&oh=00_AfOEPr1KtkUoVzVrApKEtSQ7OEhPpGb0PROSCpWbDG04Eg&oe=6859FC1A' alt=''/>
              </div>
              <div>
                <img className='h-auto w-full rounded-lg' src='https://scontent-jnb2-1.xx.fbcdn.net/v/t39.30808-6/482346930_1210025734456240_6895319643852812093_n.jpg?stp=dst-jpg_s600x600_tt6&_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=7u6RFwMlFW4Q7kNvwFBvoJ-&_nc_oc=Adn_MxNqcQvcku52N9A1tI6iwg_9rHSFgT1TIE2G9yUxBmjk1i609NTYYTsJ_xFYrGY&_nc_zt=23&_nc_ht=scontent-jnb2-1.xx&_nc_gid=WNXPL6j9TQdp_k7OMzleuA&oh=00_AfNPMdbmxMnaQ8UYW3jhfRB7XqUsG_k6GaP0IZWleuTjIA&oe=685A089A' alt=''/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery