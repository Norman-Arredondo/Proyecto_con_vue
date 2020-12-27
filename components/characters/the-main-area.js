const TheMainArea = {
    template:
        `
    <div class="container-fluid">
        <h1 class="main-title"> Valar Morghulis.. </h1>
        <h2 class="main-subtitle"> Who's next? </h2>
        <div class="row">

                    <!--Cabeza-->
                    <div class="col-12">
                        <div class="body-row head-row d-flex justify-content-center">
                            <PartSelector :parts="fileParts.heads" 
                                          :rand="randomHead"
                                          @randomInvoked="invoked => randomHead = !invoked"></PartSelector>
                        </div>
                    </div>

                    <!--Cuerpo-->

                    <div class="col-12">
                        <div class="body-row head-row d-flex justify-content-center">
                        <PartSelector :parts="fileParts.middles"
                                      :rand="randomMiddle"
                                      @randomInvoked="invoked => randomMiddle = !invoked"></PartSelector>

                        </div>
                    </div>


                    <!--Pies-->

                    <div class="col-12">
                        <div class="body-row head-row d-flex justify-content-center">
                        <PartSelector :parts="fileParts.foots"
                                  :rand="randomFoot"
                                  @randomInvoked="invoked => randomFoot = !invoked"></PartSelector>

                        </div>
                    </div>
                

                <div class="btn-area d-flex justify-content-center">
                    <div class="btn-container d-flex justify-content-between">
                        <button class="btn btn-light" @click="randomAll()"> Random </button>
                        <button id="about-btn" class="btn btn-light"> About </button>
                        <button class="btn btn-light"> Download </button>
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
            }

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

        }

    },
}