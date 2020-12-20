new Vue({
    el: '#main-area',
    data() {
        return {
            mainMsg: 'Prueba en Codepen',
            colorBoxes: [{
                    id: 1,
                    class: 'color-box',
                    htmlId: 'red-box'
                },
                {
                    id: 2,
                    class: 'color-box',
                    htmlId: 'blue-box'
                },
                {
                    id: 3,
                    class: 'color-box',
                    htmlId: 'gray-box'
                },

            ],

            selectedBoxIndex: 0,
            minIndex: 0,
            maxIndex: 2,
        }

    },
    methods: {
        selectPrevPart() {
            this.selectedBoxIndex = this.selectedBoxIndex > this.minIndex ?
                this.selectedBoxIndex - 1 :
                this.maxIndex;
        },
        selectNextPart() {
            this.selectedBoxIndex = this.selectedBoxIndex < this.maxIndex ?
                this.selectedBoxIndex + 1 :
                this.minIndex;
        }
    }
})