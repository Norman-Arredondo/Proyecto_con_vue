const TheMainArea = {
    template:
        `
    <div class="container-fluid">
        <h1 class="main-title"> Valar Morghulis.. </h1>
        <h2 class="main-subtitle"> Who's next? </h2>
            <div class="row">
                <div v-show="isAboutOpen" class="text-center text-md-left" :class="quotesClass" id="quote-area">
                    <div v-if="apiCalled" class="spinner-container">
                        <div class="spinner-grow red-spinner" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                        <ul class="quote-list">
                            <li v-for="quote in selectedChar.quotes"> {{ quote }}</li>
                        </ul>
                </div> 
          
                    <!--Cabeza-->
                    <div :class="figureClass">
                        <div class="ch-body d-flex flex-column">
                            <div class="body-row head-row d-flex justify-content-center">
                                <PartSelector :parts="fileParts.heads" 
                                            :rand="randomHead"
                                            @randomInvoked="invoked => randomHead = !invoked"
                                            @partSelected="part => partSelected(part)"></PartSelector>
                            </div>

                    <!--Cuerpo-->
                            <div class="body-row middle-row d-flex justify-content-center">
                            <PartSelector :parts="fileParts.middles"
                                        :rand="randomMiddle"
                                        @randomInvoked="invoked => randomMiddle = !invoked"
                                        @partSelected="part => partSelected(part)"></PartSelector>
                            </div>
                    
                    <!--Pies-->
                            <div class="body-row foot-row d-flex justify-content-center">
                                <PartSelector :parts="fileParts.foots"
                                        :rand="randomFoot"
                                        @randomInvoked="invoked => randomFoot = !invoked"
                                        @partSelected="part => partSelected(part)">
                                </PartSelector>
                            </div>
                        </div>
                    
                            <div class="btn-area d-flex justify-content-center">
                                <div class="btn-container d-flex justify-content-between">
                                    <button class="btn btn-light" @click="randomAll()"> Random </button>
                                    <button id="about-btn" class="btn btn-light" @click="aboutToggle"> About </button>
                                    <button class="btn btn-light"> Download </button>
                                </div>
                            </div>
                    </div>

                <div v-fhow="isAboutOpen" id="about-area" :class="aboutClass"> <!-- About-area -->
                    <div v-if="apiCalled" class="spinner-container">
                        <div class="spinner-grow red-spinner" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                        <div class="text-center text-md-left" v-else="!apiCalled">
                            <p class="about-p"> <b> Name: </b> {{ selectedChar.name}} </p>
                            <p class="about-p"> <b> Born: </b> {{ selectedChar.born}}</p>
                            <p class="about-p"> <b> Culture: </b> {{ selectedChar.culture}} </p>
                            <p class="about-p"> <b> Titles: </b> </p>
                                <ul class="about-titles">
                                    <li v-for="title in selectedChar.titles"> {{title}}</li>
                                </ul>
                        </div>
                </div>
            </div>
    </div>
    `,

    /*
    cuerpo
    <div class="body-part position-relative">
                                <div class="prev-area" @mouseover="hoverPrev = true" @mouseleave="hoverPrev = false">
                                    <button class="prev-btn" v-show="hoverPrev" @click="selectPrevBody()">
                                        < </button>

                                </div>
                                <img :src="fileParts.middles[selectedBodyIndex].src" class="body-img heads-img about-selected">
                                <div class="next-area" @mouseover="hoverNext = true" @mouseleave="hoverNext = false">
                                    <button class="next-btn" v-show="hoverNext" @click="selectNextBody()"> > </button>
                                </div>
                            </div>
    
    */

    /*
    pies

    <div class="body-part position-relative">
                            <div class="prev-area" @mouseover="hoverPrev = true" @mouseleave="hoverPrev = false">
                                <button class="prev-btn" v-show="hoverPrev" @click="selectPrevFoot()">
                                    < </button>

                            </div>
                            <img :src="fileParts.foots[selectedFootIndex].src" class="body-img heads-img about-selected">
                            <div class="next-area" @mouseover="hoverNext = true" @mouseleave="hoverNext = false">
                                <button class="next-btn" v-show="hoverNext" @click="selectNextFoot()"> > </button>
                            </div>
                        </div>
    
    */ 

    components: { PartSelector },

    data() {
        return {
            fileParts: bodies,
            
            /*
            hoverPrev: false,
            hoverNext: false,

            selectedHeadIndex: 0,
            selectedBodyIndex: 0,
            selectedFootIndex: 0,

            minIndex: 0,
            maxIndex: bodies.heads.length - 1
            */

            randomHead: false,
            randomMiddle: false,
            randomFoot: false,
            selectedCharId: 1,
            selectedParts: {
                head: {},
                middle: {},
                foots: {}
            },
            isAboutOpen:false,
            isAboutSelected: false,
            quotesClass: 'col-12 col-md-4 quotes',
            aboutClass: 'col-12 col-md-4 about',
            figureClass: 'col-12',
            selectedChar: {
                id: 0,
                name: "",
                born: "",
                culture: "",
                titles: [],
                quotes: []
            },
            apiCalled: false, 

        }
    },
    methods: {
        /*
        selectPrevHead() {
            this.selectedHeadIndex = this.selectedHeadIndex > this.minIndex ? this.selectedHeadIndex - 1 : this.maxIndex;
        },
        selectNextHead() {
            this.selectedHeadIndex = this.selectedHeadIndex < this.maxIndex ? this.selectedHeadIndex + 1 : this.minIndex;
        },

        selectPrevBody() {
            this.selectedBodyIndex = this.selectedBodyIndex > this.minIndex ? this.selectedBodyIndex - 1 : this.maxIndex;
        },
        selectNextBody() {
            this.selectedBodyIndex = this.selectedBodyIndex < this.maxIndex ? this.selectedBodyIndex + 1 : this.minIndex;
        },

        selectPrevFoot() {
            this.selectedFootIndex = this.selectedFootIndex > this.minIndex ? this.selectedFootIndex - 1 : this.maxIndex;
        },
        selectNextFoot() {
            this.selectedFootIndex = this.selectedFootIndex < this.maxIndex ? this.selectedFootIndex + 1 : this.minIndex;
        }
        */

        randomAll() {
            this.randomHead = true;
            this.randomMiddle = true;
            this.randomFoot = true;
        },
        partSelected(part) {
            if(part.type == 'heads') {
                this.selectedParts.head = part;
                this.selectedCharId = part.id;
                this.aboutCharacter();

            }
            if(part.type == "middles") {
                this.selectedParts.middle = part;
            }

            if(part.type == "foots") {
                this.selectedParts.foot = part;
            }
        },
        aboutToggle() {
            if(this.isAboutOpen) {
                this.closeAbout();
            }else{
                this.isAboutSelected = true;
                this.aboutCharacter();
            }
        },
        closeAbout() {
            this.isAboutOpen = false;
            this.isAboutSelected = false;
            this.quotesClass = 'col-12 col-md-4 quotes';
            this.aboutClass = 'col-12 col-md-4 about';
            this.figureClass = 'col-12';

        },
        aboutCharacter() {
            if(this.isAboutSelected){
                this.apiCalled = true;
                this.isAboutOpen = true;
                this.aboutClass = "col-12 order-1 col-md-4 order-md-3 about area-active";
                this.quotesClass = "col-12 order-3 col-md-4 order-md-1 about area-active";
                this.figureClass = "col-12 order-2 col-md-4 order-md-2";
            }

            if(this.isAboutOpen && this.selectedParts.head.id !== undefined) {
                let charApiId = this.selectedParts.head.apiId;
                if(charApiId != null) {
                    let apiUrl = "https://www.anapioficeandfire.com/api/characters/" + charApiId;
                    axios.get(apiUrl)
                    .then((response) => {
                        this.selectedChar.id = this.selectedCharId;
                        this.selectedChar.name = response.data.name;
                        this.selectedChar.born = response.data.born;
                        this.selectedChar.culture = response.data.culture;
                        this.selectedChar.titles = response.data.titles;
                        this.selectedChar.quotes = this.selectedParts.head.quotes;
                        this.apiCalled = false;
                    })
                    .catch(function(error) {
                        console.log(error);
                        this.apiCalled = false;
                    });
                }else{
                    this.selectedChar.id = this.selectedCharId;
                    this.selectedChar.name = "¿ ?";
                    this.selectedChar.born = "";
                    this.selectedChar.culture = "";
                    this.selectedChar.titles = this.selectedParts.head.name;
                    this.selectedChar.quotes = [ "¿?" ];
                    this.apiCalled = false;
                }
            }

        },

    }
}
