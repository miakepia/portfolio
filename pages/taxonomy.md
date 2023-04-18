---
title: 'Work'
layout: base.html

---

<!-- Section 1 The challenge -->

<section>
<div class="intro">
   <h1>Improving user journeys on GOV.UK</h1>
    
  In 2018, a user couldn't move easily from one part of GOV.UK to another. The website was made up of three separate and siloed areas, with no reliable way of navigating across them. 
    
  Users couldn’t find what they needed or complete tasks, and publishers couldn’t easily link content together.
</div> 
</section>

<section> 
<div class="grid">
<div class="right">

   <h2>The challenge</h2>

  Having three websites masquerading as one is a problem.

  The main navigation, page layouts, related links, and breadcrumbs all worked differently depending on you where you were. 

  There were two separate topic systems, and no way to tag a piece of content to both. Related links needed to be curated by publishers, but even they didn’t know how to navigate the two taxonomies to find the right pages.
    
</div>
</div>

<figure class="grid">
  <picture class="middle">
    <source media="(min-width: 800px)" srcset="/assets/images/site-headers.png">
    <source media="(max-width: 400px)" srcset="/assets/images/site-headers-mob.png">
    <img src="/assets/images/site-headers.png" alt="A photograph of a man looking at a wall, with a picture of the GOV.UK site headers printed on it">
 </picture>

  <figcaption class="right">GOV.UK looks and feels like a single domain, but is made up of several smaller parts, all powered by different publishing applications. </figcaption>
  </figure>

<div class="grid">
<div class="right">

<h2>The goal</h2>

  Most user journeys on GOV.UK begin on a content page. This means that related links — not navigation pages — are one of the best ways to help users find what they need. 

  Unfortunately, the vast majority of content on the site had no related links at all. We wanted to find a way to use machine learning to add links to pages so that publishers weren't overwhelmed with the work .
</div>
</div>

<div class="grid">
<div class="right">
   <h2>What we did</h2>

  We realised early on that to fix navigation, we needed to fix the foundations of how GOV.UK fit together. 

  <h3>We tackled the taxonomy</h3>

  The team created a new, overarching taxonomy to sit across the different parts of the site, unifying all content. This would help us link the separate areas of the site together to improve user journeys. 
</div>
</div>

<figure class="grid"> 
    
  <picture class="middle">
    <source media="(min-width: 800px)" srcset="/assets/images/taxonomy.svg">
    <source media="(max-width: 600px)" srcset="/assets/images/taxonomy-mob.svg">
    <img src="/assets/images/taxonomy.svg" alt="An illustration of the GOV.UK taxonomy">
  </picture>

   <figcaption class="right">The universal taxonomy also allowed us to understand the breadth and depth of our content, and consider how best to present it to users.</figcaption>
</figure>

<div class="grid">
<div class="right">

  <h3>We mapped the domain</h3>

  Mapping the domain meant bringing together everything that made up the website and exposing their relationships. For example, a ‘Minister’ can give a ‘Speech’ on behalf of a ‘Department’. 

  Once we had an overview of the domain, we needed a way to organise and prioritise things in a way that would be easy for users to understand.

</div>
</div>

<figure class="grid">
   <picture class="middle">
    <source media="(min-width: 800px)" srcset="/assets/images/domain.svg">
    <source media="(max-width: 600px)" srcset="/assets/images/domain-mob.svg">
    <img src="/assets/images/domain.svg" alt="An illustration of a the GOV.UK domain map">
  </picture>

   <figcaption class="right">Once we understood the domain we could begin to predict how users might need to move across the site.</figcaption>
</figure>

<div class="grid">
<div class="right">

<h3>We organised content for our users</h3>

  Users have different needs depending on what they are doing. By defining the ‘jobs’ and 'tasks' our users do, we were able to figure out what type of content they need to see, and when.

  Each user job corresponds to a different type of content.

  We ran a series of card sorting sessions and tree tests with publishers and end users to map content types to jobs. This gave us insight into which pages needed to link together.
</div>
</div>

<figure class="grid"> 
   <picture class="middle">
    <source media="(min-width: 800px)" srcset="/assets/images/jobs-spreadsheet.svg">
    <source media="(max-width: 600px)" srcset="/assets/images/jobs-spreadsheet-mob.svg">
    <img src="/assets/images/jobs-spreadsheet.svg" alt="A spreadsheet with jobs to be done mapped to content types">
  </picture>

  <figcaption class="right">User jobs and tasks helped us understand what users needed to do on different content types, and where they needed to go next.</figcaption>
</figure>
</section>

<div class="grid">
<div class="right">
  <h3>We shipped related links</h3>

  We understood how the site fits together, and we had a rich, deep taxonomy. Jobs gave us a way to understand journeys and prioritise features.

  By combining these elements, we were able to begin writing related link ‘formulas’ that could be generated automatically using machine learning.

  Publishers could choose from a list of machine-generated related links or add their own. We could now add related links to the thousands of pages that had none.

  The work done to <a href="/template">streamline the front-end templates</a> meant that we were able to ship and AB test our related link formulas with ease.

</div>
</div>

<figure class="grid"> 

  <picture class="middle">
    <source media="(min-width: 800px)" srcset="/assets/images/link-formula.png">
    <source media="(max-width: 600px)" srcset="/assets/images/link-formula-mob.png">
    <img src="/assets/images/link-formula.png" alt="An illustration of how links are created, using metadata, content types, jobs and tasks, key words and the tacxonomy">
  </picture>

  <figcaption class="right">We created a range of formulas to train an algorithm to suggest related links.</figcaption>
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
      <a href="/content-types">Exploring GOV.UK as a system</a>
    </div>
    <div class="prev">
      <a href="/template">A simpler, clearer GOV.UK</a>
    </div>
  </div>
</div>
