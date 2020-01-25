<template>
  <main>
    <div>
      <div class="slideshow-container">
        <div class="mySlides">
          <q
            >I love you the more in that I believe you had liked me for my own
            sake and for nothing else</q
          >
          <p class="author">- John Keats</p>
        </div>
        <div class="mySlides">
          <q
            >But man is not made for defeat. A man can be destroyed but not
            defeated.</q
          >
          <p class="author">- Ernest Hemingway</p>
        </div>
        <div class="mySlides">
          <q>I have not failed. I've just google ways that won't work.</q>
          <p class="author">- Thomas A. Edison</p>
        </div>
        <a class="prev" @click="plusSlides(-1)">❮</a>
        <a class="next" @click="plusSlides(1)">❯</a>
      </div>
      <div class="dot-container">
        <span class="dot" @click="currentSlide(1)"></span>
        <span class="dot" @click="currentSlide(2)"></span>
        <span class="dot" @click="currentSlide(3)"></span>
      </div>
      <div>
        <div v-for="product in genreList"
              :key="'product:' + product.id"
              class="books">
          <p class="genretype">Fictional Books</p>
          <div class="booklist">
            <div
              v-for="product in genreList"
              :key="'product:' + product.id"
              class="books"
            >
              <div>
                <div class="bookimage">
                  <figure @click="routeToProductDescription(product.id)">
                    <img :src="product.url" style="width:100%;height:100%;object-fit:cover;"  />
                  </figure>
                </div>
                <h5>{{ product.title }}</h5>
                <h5>{{ product.author }}</h5>
                <h5>{{ product.price }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <router-view />
    </div>
  </main>
</template>

<script>
// import Sidebar from '@/components/Sidebar'
import Genre from "@/views/Genre";
import { mapGetters } from "vuex";
export default {
  components: Genre, 
  name: "slides",
  computed: {
    ...mapGetters(["genreList"])
  },
  data() {
    return {
      slideIndex: 1
    };
  },
  mounted() {
    this.showSlides(this.slideIndex);
  },
  methods: {
    plusSlides(n) {
      window.console.log("Clicked on slide");
      this.showSlides((this.slideIndex += n));
    },
    currentSlide(n) {
      window.console.log("Dot clicked");
      this.showSlides((this.slideIndex = n));
    },
    showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        this.slideIndex = 1;
      }
      if (n < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
    }
  }
};
</script>

<style>
.slideshow-container {
  position: relative;
  background: #f1f1f1f1;
  margin-top: 42px;
}
.mySlides {
  width: 100%;
  display: none;
  padding: 80px;
  text-align: center;
}
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -30px;
  padding: 16px;
  color: #888;
  font-weight: bold;
  font-size: 20px;
  border-radius: 0 3px 3px 0;
  user-select: none;
}
.next {
  position: absolute;
  right: 0;
  border-radius: 3px 0 0 3px;
}
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
}
.dot-container {
  text-align: center;
  padding: 20px;
  background: #ddd;
}
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}
.active,
.dot:hover {
  background-color: #717171;
}
q {
  font-style: italic;
}
.author {
  color: cornflowerblue;
}
.booklist {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  align-items: center;
}
.books {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 30px
}
.books:hover {
  border: 1px solid #777;
}

.bookimage {
  display:block;
  margin: auto;
  height: 150px;
  width: 100px
}
.genretype {
  font-size: 20px;
  margin-left: 30px;
  padding-top: 20px;

}
</style>
