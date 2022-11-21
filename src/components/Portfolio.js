import React from 'react';

import PlaceHolderOne from '../assets/images/placeholder1.jpg';
import PropertyManager from '../assets/images/propertymanager.png';
import FindingFido from '../assets/images/findingfido.png'


function Portfolio() {
  return (
    <section class="portfolio">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="card">
            <img
              src={PropertyManager}
              alt="PropertyManager"
              class="card-img-top"
            />
            <div class="card-body">

              <a href="https://github.com/hoffh-5334/propertyManager" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="propertymanager-production.up.railway.app" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={FindingFido}
              alt="Finding Fido"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/hoffh-5334/finding-fido" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://hoffh-5334.github.io/finding-fido/" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>


        <div class="col">
          <div class="card">
            <img
              src={PlaceHolderOne}
              alt="Place Holder"
              class="card-img-top"
            />
            <div class="card-body">
              <a href="https://github.com/hoffh-5334" target="_blank" rel="noreferrer">
                <button>GitHub</button>
              </a>
              <a href="https://github.com/hoffh-5334" target="_blank" rel="noreferrer">
                <button>Website</button>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>


  );
}

export default Portfolio;