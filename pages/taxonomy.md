---
title: 'Work'
layout: base.html

---

<!-- Section 1 The challenge -->

<section>
<div class="intro">
   <h1>Improving navigation</h1>
    
    In 2018, a user couldn't move easily from one part of GOV.UK to another. The website was made up of three separate and siloed areas, with no reliable way of navigating across them. 
    
    Users couldn’t find what they needed or complete tasks, and publishers couldn’t easily link content together.
</div> 
</section>

<section> 
<div class="grid">
<div class="right">

   <h2>The challenge</h2>

    Having three websites masquerading as one is a problem.

    The main navigation, page layouts, related links, and breadcrumbs all worked differently depending on which part of the site you were in. 

    There were two separate topic systems, and no way to tag a piece of content to both. Related links needed to be curated by publishers, but even they didn’t know how to navigate the two taxonomies to find the right pages.
    
</div>
</div>

  <figure class="grid">
   <img  class="middle" src="/assets/images/site-headers.png"
    alt="doot doot"> 
   <figcaption class="right">GOV.UK looks and feels like a single domain, but is made up of several smaller parts, all powered by different publishing applications. </figcaption>
  </figure>

<div class="grid">
<div class="right">

<h2>The goal</h2>

    We realised early on that to fix navigation, we needed to fix the foundations of how GOV.UK fit together. For users to be able to make sense of the site, we needed to make sense of it first. 

    Our first test for this new foundation would be to see if we could automatically generate and suggest valuable related content without publisher intervention.
</div>
</div>

<div class="grid">
<div class="right">
   <h2>What we did</h2>
   <h3>Tackled the taxonomy</h3>

    The team created a new, overarching taxonomy to sit across the different parts of the site, allowing us to unify and serve all content in one place. This would later allow us to link the separate areas of the site together and improve whole user journeys. 
</div>
</div>

<figure class="grid">
    <img  class="[ right ]" src="/assets/images/taxonomy-alt.png"
    alt="doot doot"> 
   <figcaption class="right">The universal taxonomy allowed us to understand the breadth and depth of our content, and consider how best to present it to users.</figcaption>
</figure>

<div class="grid">
<div class="right">

  <h3>Mapped the domain</h3>

    We mapped the GOV.UK domain, bringing together everything that made up the website, and how it fits together. For example, a ‘Minister’ can give a ‘Speech’ on behalf of a ‘Department’. 

    Once we had an overview of all the ‘objects’ in the domain, we needed a way to organise and prioritise them in a way that would be easy for users to understand.

</div>
</div>

<figure class="grid">
   <img  class="[ middle ] [  ]" src="/assets/images/domain.png"
    alt="doot doot"> 
   <figcaption class="right">Once we understood the domain and the relationships between objects, we could begin to understand and predict how users might need to move through the site.</figcaption>
</figure>

<div class="grid">
<div class="right">

<h3>Reconsidered our users</h3>

    The way we thought about users was split: complex content was published by departments and accessed by what were assumed to be ‘specialist’ users. ‘Non-specialist’ users were directed to tightly curated content written for a general audience. 

    Splitting users into ‘specialist’ and ‘non-specialist’ categories didn’t reflect the complexity of our users' situations. It had led to all these siloes in the first place. 

    We used the Jobs To Be Done framework to develop three widely applicable ‘user jobs’. A ‘job’ can be associated with, but not necessarily limited to a category of user.
</div>
</div>

<div class="grid">
    <blockquote class="[ quote ] [ right ]">We developed three high-level jobs to be done, and mapped their tasks to different types of content.</blockquote>
  </div>

<figure class="grid"> 
  <img  class="middle" src="/assets/images/jobs-spreadsheet.png"
  alt="doot doot"> 
  <figcaption class="right">Caption.</figcaption>
</figure>
</section>

<div class="grid">
<div class="right">
  
  <h3>Organised content in a user-centred way</h3>

    We ran a series of card sorting sessions and tree tests with publishers and end users to understand how jobs related to the most popular types of content in the domain.

    Grouping content by job made it possible for us to understand how users moved across the site. On content related to more than one job, we could prioritise which job tasks were more important, informing design decisions. 
</div>
</div>

<div class="grid">
<div class="right">
  <h3>Shipped new related links</h3>

    We understood how the site fits together, and we had a rich, deep taxonomy. Jobs gave us a way to understand journeys and prioritise features.

    By combining these elements, we were able to begin writing related link ‘formulas’ that could be generated automatically using machine learning.

    Publishers could choose from a list of machine-generated related links or add their own. We could also now add related links to the thousands of pages that had none, alleviating dead ends for our users.

    The work done to streamline the front-end templates meant that we were able to ship and AB test our related link formulas with ease.

</div>
</div>

<figure class="grid"> 
  <img  class="middle" src="/assets/images/link-formula.png"
  alt="doot doot"> 
  <figcaption class="right">We were able to combine jobs, objects and taxonomy elements to predict where users needed to go next.</figcaption>
</figure>
</section>

<section>
<div class="grid">
<div class="right">
  <h2>Outcomes</h2>

    A range of navigation improvements followed the related link work. The biggest was a new, global menu that helps users to understand what GOV.UK offers and find what they need. A range of new browse pages have also been shipped.

    The unified taxonomy is being iterated and deployed continuously as we merge and retire the two older taxonomies. Tagging is simpler for publishers, and tags can be updated easily when the need arises.

</div>
</div>


<div class="outro">

    This foundational work provides the basis for further, ambitious improvements to the platform in the coming years.
</div>
</section>

<section>
<div class="grid">
<div class="right">
<div class="credits">
  <h2>Credits</h2>
 
    Alex Torrance (design), Ganesh Senthi (product management), Sally Creasy (content strategy), Imeh Akpan (user research), Andy Sellick (front-end development), Paul Cronk (analytics).
  </div>
  </div> 
</section>

<div class="[ grid ] [ pagination ]">
  <div class="right">
    <div class="next">
      <a href="/content-types">Exploring a GOV.UK experience system</a>
    </div>
    <div class="prev">
      <a href="/template">Refining templates</a>
    </div>
  </div>
</div>
