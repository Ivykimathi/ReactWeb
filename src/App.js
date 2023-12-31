
// import homebg from './1.png';
import two from './2.png';
import three from './3.png';
import four from './4.png';
import five from './5.png';
import six from './6.png';
import seven from './7.png';
import eight from './8.png';
import horti from './horti.png';
import vet from './vet.png';
import tea from './tea.png';
import climate from './climate.png';
import logo from './logo.jpg';

import './App.css';

function App() {
  return (
    <div>

       <nav className="navbar" id="home" name="home">
        <div className="navbar_container">
        <img src={logo} className="App-logo" alt="logo" />
            <ul className="navbar_menu">
                <li className="navbar_item">
                  <a href="home.html" className="navbar_links">Home</a>
                </li>
                <li className="about_item">
                   <a href="#about" className="navbar_links">About</a>
                </li>
                <li className="navbar_item">
                   <a href="#department" className="navbar_links">Departments</a>
                </li>
                <li className="navbar_item">
                  <a href="#projects" className="navbar_links">Projects</a>
               </li>
                <li className="navbar_btn">
                   <a href="#contact" className="button" title="contact us">CONTACT US</a>
                </li>
            </ul>
          </div>
         </nav>
    
   
      <div id="home" name="home" className="home">
        <div className="home">
       <h5> Welcome to KALRO an</h5>
       <h3><br/> <span>Agricultural and Livestock Research Organisation</span></h3>

      <div className="homew">
       <h3><u>Leading Agricultural and Livestock Research Institute</u></h3><br/>
       <p>To conduct agricultural research, through the application of science, technology and innovation
          to catalyze sustainable growth and development in agriculture and livestock Product Value
          Chain.
       </p>
    </div>
    </div>
    </div>

    <div id="about" name="about" class="about">
   <span><h2>About us..</h2></span><br/><br/>
      <div class="about">
         
        <span><h3>Who Are We?</h3></span>
         <p>KALRO is a corporate body created under the Kenya Agricultural and Livestock Research
             Act of 2013 to establish suitable legal and institutional framework for coordination
              of agricultural research in Kenya with the following goals:<br/>

            • Promote, streamline, co-ordinate and regulate research in crops, livestock, genetic
             resources and biotechnology in Kenya.<br/>
            
            • Expedite equitable access to research information, resources and technology and
             promote the application of research findings and technology in the field of agriculture.</p>
         <span><h3 >Our vision</h3></span>
         <p>Excellence in agricultural and livestock research toward transformed livelihoods</p>

         <span><h3 >Our Mission</h3></span>
         <p>To conduct agricultural research through the application of science, technology, and innovation
             to catalyze sustainable growth and development in agriculture and livestock Product Value
              Chains</p>

              <span><h3 >Goal</h3></span>
              <p>To contribute to the growth of the agricultural sector through research coordination
                  and regulation; technology and innovation development; and catalyzing transfer and
                   utilization of agricultural research outputs.</p>

            <span><h3>Mandate</h3></span>
            <p>The mandate of KALRO as stated in the Act is to:
               <br/>a)  Promote, streamline, coordinate, and regulate research in crops, livestock, genetic resources, and biotechnology;
               <br/>b)  Promote, streamline, coordinate, and regulate research in crops and animal diseases;
               <br/> c)  Expedite  equitable  access  to  research  information,  resources, and  technology  and
                 promote  the application of  the   research findings and   technology in  the   field   
                  of agriculture
               </p>
</div>

    </div>


    {/*      department     */}

    <div class="department" id="department" name="department">
         <span><h2>Departments</h2></span><br/><br/>
            <p>There are several departments in kalro including crops, livestock and institutes</p>
         <div class="dep">
               <div class="row1">
                  <h4>Crop Department</h4><br/>
                  <p><u>About the Department</u><br/>

                     Crop production plays an important role in Kenya’s economic development as a
                     major source of income, employment creation, and saving on foreign exchange
                     expenditure through import substitution. This sub-sector is a major occupation
                     of the rural population and accounts for a large share of the total 
                     agricultural output. The Crops sub-sector provides national food and
                     nutritional security and income generation through local and export markets.
                     This sub-sector plays a significant role in the delivery of the Millennium 
                     Development Goals of reducing poverty and hunger, as well as meeting the 
                     aspirations encapsulated in various Kenya Government policy documents such
                     as Vision 2030 (GoK, 2008) and the Agriculture Sector Development Strategy 
                     (2009-2014). Currently, the annual crop production stands at 6 million tons
                     of food crops, 4.2 million tons of horticultural crops, and 500,000 tons of
                     industrial crops, all supporting 10 million households. Crop diseases, pests,
                     and weeds greatly reduce the potential of these crop categories in quality 
                     and quantity. Currently, losses due to these constraints are estimated at 40%.
                     Efforts to increase production and reduce these losses take cognizance of the
                     need to conserve the environment.</p><br/>
                     <p>Some crops include:</p><br/>
                     <img src={two} alt=""width="150px"/>
                     <img src={four} alt=""width="150px"/>
                     <img src={three} alt=""width="150px"/>
                     <p>Sorghum, Beans, Maize</p>


               </div>
               <div class="row2">
                  <h4>Livestock Department</h4><br/>
                  <p><u>About the Department</u><br/>
                     The livestock sub-sector contributes over 30% of the farm gate value of
                     agricultural commodities, about 10% of the national GDP and at least 50% of 
                     the agricultural GDP. The sector employs about 50% of the agricultural labour
                      force. Domestic livestock also supplies the local requirements of meat, milk,
                       dairy products and other livestock products while accounting for about 30%
                        of the total marketed agricultural products. In the ASALs pastoralism, 
                        ranching and agro-pastoralism are practised. In agro-pastoralism, the
                         farmers integrate crop and livestock production and crop residues form 
                         a significant proportion of livestock feeds.Livestock comprises dairy
                          cattle, goats, camels and beef cattle, small ruminants, non-ruminants,
                           poultry and emerging livestock such as quail and rabbits. Milk production
                            in the country includes 4.6 billion litres from cattle, 6.4 million 
                            litres from goats and 340 million litres from camels providing an 
                            important source of livelihoods to Kenyans.Production constraints include
                             low productivity, poor breed characterisation, inadequate breeding services,
                              poor animal husbandry, inadequate extension and advisory services, inadequate
                               feeds and feeding, disease challenges, high cost of inputs and poor access to
                                markets and inadequate integration of industry players.</p><br/>
                            <p>Some livestock include:</p>
                            <img src={five} alt=""width="150px"/>
                     <img src={six}alt=""width="150px"/>
                     <img src={seven} alt=""width="150px"/>
                     <p>Cow, Sheep, Swine</p>

               </div>
            </div>
            <div class="col2">
               <div class="row3">
                  <h4>Institutes</h4><br/>
                  <p><u>About the Departments</u><br/></p>
                  <p>The Kenya Agricultural and Livestock Research Organization is composed of 
                     semi-autonomous institutes established under the Kenya Agricultural and
                      Livestock Research Act of 2013. This Act empowers the Cabinet secretary,
                       in consultation with the KALRO Board to establish research institutes that
                        may be necessary for the performance of KALROs functions under the Act. 
                        The Act also recognises the role of public universities in agricultural
                         research and provides for partnerships with them as associate research
                          institutes. Currently, sixteen research institutes have been established.
                     Under the Act, the functions of the research institutes under KALRO shall be to:
                     
                    <br/> 1. Advise on, and develop appropriate systems to promote balanced, 
                    diversified, and sustained agricultural development and to optimize agricultural
                     production through adaptive and investigative research; and<br/>
                     2. Facilitate the use of improved production technology, and establish 
                     adequate feedback systems from agricultural producers in order to achieve and 
                     maintain national self-sufficiency and export capacities in agricultural 
                     products.It is expected that the Institutes shall conduct research in their respective
                      value chains and disseminate appropriate information and technologies to intended users.
                       Although the key mandate of each institute will be restricted, the various research centers
                        under the administration of each Institute may manage research projects covering multiple
                         value chains and commodities.</p><br/>
                         <p>Some Institutes include:</p><br/>
                         <img src={eight} alt=""width="150px"/>
                         <img src={horti} alt=""width="150px"/>
                         <img src={vet} alt=""width="150px"/>
                         <p>Arid and RangeLands, Horticulture, Veterinary Research Institutes</p>
               </div>
            </div>

      </div>


      {/*         projects    */}
      <section className="projects" id="projects" name="projects"><br/><br/>
         <span><h2>Research Projects</h2></span>
         <div className="prow1">
            <div className="pcol1">
                <img width="250px" height="200px" src={tea}/><br/>
                <p>The TELA Maize Project is a public-private partnership that is working towards
                    initiating the commercialization of transgenic insect-protected and later
                     drought-tolerant maize varieties to enhance food security in Sub-Saharan Africa.
                      The word “TELA” is derived from the Latin word TUTELA which means “Protection.” 
                      The TELA Maize Project builds on progress made from a decade of excellent breeding
                       work under the Water Efficient Maize for Africa (WEMA) Project.WEMAs purpose was 
                       to develop drought-tolerant and insect-protected maize varieties for farmers to 
                       produce more reliable harvests under moderate drought conditions and protect maize
                        from insects. The project used both conventional advanced plant breeding and
                         biotechnology in the development of the maize varieties. The TELA Project is a 
                         continuation of the transgenic WEMA component.</p>
            </div>
           
         </div>
         <div className="prow1">
         <div className="pcol1">
            <img width="250px" height="200px" src={climate}/><br/>
            <p>Kenya Climate-Smart Agriculture Project (KCSAP) is a Government of Kenya/World
               Bank-supported project under the State Department for Crops Development in the
               Ministry of Agriculture, Livestock, Fisheries and Irrigation (MoALF&I). The project
               is implemented within five components: Component 1: Upscaling Climate-Smart
               Agricultural Practices; Component 2: Strengthening Climate-Smart Agricultural
               Research and Seed Systems; Component 3: Supporting Agro-weather, Market, Climate,
               and Advisory Services; Component 4: Project Coordination and Management;
               Component 5: Contingency Emergency Response. KCSAP aims to achieve three 
               “triple wins”; 1) Sustainably increasing productivity; 2) Building resilience
               to climate risks (adaptation); 3) Reducing/removing Greenhouse Gas Emissions
               (mitigation). These will be achieved by focusing primarily on: (i) improving
               water/soil management, especially within smallholder crop and livestock 
               production systems; (ii) promoting sustainable, community‐driven rangeland 
               management and improved access to quality livestock services in ASALs; (iii)
               supporting the generation and dissemination of improved agricultural TIMPs
               and building sustainable seed systems; and (iv) enhancing access to quality
               agro-weather, climate, advisory, and market information services among 
               farmers/herders for improved decision making.</p>
        </div>
      </div>
      </section>

      {/*     contact us */}
      <section className="contactc" id="contact"name="contact">
          <div className="content">
              <h2>Talk to us</h2>
              <p>Share your view ,comment or ask any question.We are here to help you.</p>
          </div>
          <div className="containerc">
              <div className="contactinfo">
                  <div className="box">
                      <div className="text">
                          <h3>Address</h3>
                          <p>PO BOX 57811, 00200,City Square,<br/> Nairobi, Kenya</p>
                      </div>
                  </div>
                  <div className="box">
                      <div className="text">
                          <h3>TEL</h3>
                          <p>Direct Line : </p>
                          <p>+254722206986, +254722206986, <br/>+254722206988, +254730707000</p>
                      </div>
                  </div>
                  <div className="box">
                      <div className="text">
                          <h3>Email Address</h3>
                          <p><a href="mailto:info@kalro.org">info@kalro.org</a></p>
                      </div>
                  </div>
              </div>
              <div className="contactform">
                  <form method="POST" action="conn.php">
                      <h2>Send Message</h2>
                      <div className="inputbox">
                          <input type="text" name="name" required="required"/>
                          <span>Full Name</span>
                      </div>
                      <div className="inputbox">
                          <input type="text" name="email" required="required"/>
                          <span>Email</span>
                      </div><br/>
                      <div className="inputbox">
                          <textarea required="required" name="message"></textarea>
                          <span>Type your message...</span>
                      </div>
                      <div className="inputbox">
                          <input type="Submit" name="" value="Send"/>
                      </div>
                  </form>
              </div>
          </div>
      </section><br/><br/><br/>


      {/*    footer   */}
      <footer>
         
         <div class="fcol">
            
               
                <p>KALRO</p>
                <p>Address:<br/><br/> PO BOX 57811, 00200,City Square,<br/> Nairobi, Kenya</p>
            <br/><p>designed by @ <b>Ivy</b></p>

           
         </div>
      </footer>






















    </div>
  );
}

export default App;
