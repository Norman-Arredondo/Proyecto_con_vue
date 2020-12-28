const PartSelector = {
    template:
        `
    <div class="body-part position-relative">
        <div class="prev-area" @mouseover="hoverPrev = true" @mouseleave="hoverPrev = false">
            <button class="prev-btn" v-show="hoverPrev" @click="selectPrevPart()"> < </button>
        </div>
        <img :src="selectedPart.src" class="body-img heads-img about-selected">
        <div class="next-area" @mouseover="hoverNext = true" @mouseleave="hoverNext = false">
                <button class="next-btn" v-show="hoverNext" @click="selectNextPart()"> > </button>
        </div>
    </div>
    `,

    props: {
        parts:{
            type: Array,
            required: true,
            
        },
        rand: {
            type: Boolean
        }
    },
    data() {
        return {
            hoverPrev: false,
            hoverNext: false,

            selectedPartIndex: 0,

            minIndex: 0,
            maxIndex:this.parts.length - 1
        };
    },
    watch: {
        rand: function(val) {
            if(val == true) {
                this.selectedPartIndex = Math.floor(Math.random() * (this.maxIndex - this.minIndex +1) )+ this.minIndex;
                this.$emit('randomInvoked',true);
                this.emitSelected();

            }
            
        }
    },
    computed: {
        selectedPart() {
            return this.parts[this.selectedPartIndex];
        }
    },
    methods: {
        selectPrevPart() {
            this.selectedPartIndex = this.selectedPartIndex > this.minIndex ? this.selectedPartIndex - 1 : this.maxIndex;
            this.emitSelected();
        },

        selectNextPart() {
            this.selectedPartIndex = this.selectedPartIndex < this.maxIndex ? this.selectedPartIndex + 1 : this.minIndex;
            this.emitSelected();
        },
        emitSelected() {
            this.$emit('partSelected', this.selectedPart);
        }
    },
    created() {
        this.emitSelected();
    }

}