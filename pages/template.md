---
title: 'Work'
layout: base.html

---

<!-- Section 1 The challenge -->
<section>
<div class="intro">
   <h1>Streamlining the GOV.UK front-end</h1>
  
    Poor accessibility and inconsistent layouts made GOV.UK    unpredictable to navigate and difficult to use. 
    
    Work to improve the user experience was hampered by a complicated tech stack and huge amounts of design debt.
</div> 
</section>


<section> 
<div class="grid">
  <div class="right">
   <h2>The challenge</h2>

    When GOV.UK was first built, part of the work was to digitise all the different 'content types' that departments were publishing. These included things like ‘News’, ‘Guides’ and ‘Consultations’. 

    By 2016 GOV.UK had 140 different content types, each with a unique layout. 

    Content types had been designed and iterated organically and without an overarching strategy, resulting in a great deal of variation across the site. Technical and design debt had piled up to the point that it was impossible to make global improvements, slowing down delivery and stymying innovation. 
</div>
</div>


  <figure class="grid">
  <picture class="middle">
    <source media="(min-width: 800px)" srcset="/assets/images/layout-grid.png">
    <source media="(max-width: 400px)" srcset="/assets/images/layout-grid-mob.png">
    <img src="/assets/images/layout-grid.png" alt="A grid of some of the layouts on GOV.UK in 2016">
  </picture> 
   <figcaption class="right">Caption</figcaption>
  </figure>

<div class="grid">
  <div class="right">
   <h2>What we did</h2>
   <h3>Research and design audit</h3>

    I audited all 140 layouts and their design elements, sorting them into categories and grouping them by use-case, common elements and user needs. An accessibility review of our most popular pages revealed many areas for improvement.
    
    Our user researcher interviewed designers and developers to understand what it was like to work on templates. Many told us they didn’t understand how each template worked or what it did. 

    We established that the front-end architecture was complicated and challenging, especially for new starters. 
    
  </div>
 </div>

<figure class="grid">
  <picture class="left-alt">
    <source media="(min-width: 800px)" srcset="/assets/images/postits.svg">
    <source media="(max-width: 400px)" srcset="/assets/images/postits-mob.svg">
    <img src="/assets/images/postits.svg" alt="Illustrated post it notes with notes about accessibility written on them">
  </picture> 

  <picture class="right-alt">
    <source media="(min-width: 800px)" srcset="/assets/images/personas.png">
    <source media="(max-width: 400px)" srcset="/assets/images/personas-mob.png">
    <img src="/assets/images/personas.png" alt="A photo of a woman reading some posters on a wall">
  </picture> 

   <figcaption class="right">Image of post it notes with A11y stuff] We used user profiles to help us review the templates for accessibility issues. We also tested on a range of devices, which gave us much-needed insight into how users of older technology experience the site.</figcaption>
</figure>   

<div class="grid">
  <div class="right">
  <h3>Consolidated and tested designs</h3>

    To achieve our goal of creating accessible, consistent and usable layouts, we stripped the designs back and used as few elements as possible.  

    We made improvements to the accessibility by applying global changes to the typography, links, focus states and semantic structure of the templates. 

    We used a range of methods to test our designs and measure success, including:
  <ul>
    <li>Internal confidence surveys</li>
    <li>Usability testing with users on mobile and desktop.</li>
    <li>AB tests to measure the success of layouts and components at scale</li>
  </ul>
</div>
</div>

<figure class="grid">
   <img  class="[ right ]" src="/assets/images/mobile.png"
    alt="A photograph of a man using GOV.UK on his mobile phone"> 
   <figcaption class="right">In 2016, 40% of our users were on mobile devices. By 2023, this percentage had grown to over 60%, making the mobile improvements even more important.</figcaption>
  </figure>
</section>

<section>
<div class="grid">
<div class="right">
  <h2>Outcomes</h2>

    We reduced the number of unique layouts from 140 to 10, making it more straightforward for teams to iterate GOV.UK at pace. A smaller number of layouts and design elements also meant we could simplify the front-end architecture. 

    User experience improved as the predictable design allowed users to focus on content instead of the design.

    Accessibility improvements to font size, touch targets, colour contrast and layout improved the mobile experience as well. 
    
    Given that 40% of users visited GOV.UK on mobile devices at the time, the impact of this was significant. 

    Developer and designer confidence in making changes increased, and teams felt less stressed and more able to innovate. 
</div>
</div>

<div class="outro">
   
   This work helped kick off the first, early explorations for a <a href="https://design-system.service.gov.uk/">GOV.UK Design System</a>. And the streamlined design and front-end also laid the foundations for us to improve user journeys across the site.
</div> 
</section>

<section>
<div class="grid">
<div class="right">
<div class="credits">
  <h2>Credits</h2>
 
    Nick Colley & Paul Hayes (front-end development), Humin Miah (product management), Imeh Akpan (user research), Jane O'Laughlin (delivery management).
  </div>
  </div> 
</section>



<div class="[ grid ] [ pagination ]">
  <div class="right">
    <div class="next">
      <a href="/taxonomy">Improving navigation on GOV.UK</a>
    </div>
    <!-- <div class="prev">
      <a href="/index">Another case study</a>
    </div> -->
  </div>
</div>