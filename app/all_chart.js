import * as d3 from 'd3';
import * as c3 from 'c3';

class AllChart {

    constructor(target) {
        this.target = target;
        this.chartCounts = null;
    }

    render() {
        var self = this;

        var padding = {
            top: 20,
            right: 40,
            bottom: 20,
            left: 60,
        };

        self.chartCounts = c3.generate({
            bindto: self.target,
            padding: padding,
            data: {
                columns: [
                    ['2015', 157000,27000],
                    ['2019', 224000,67000]
                ],
                type: 'bar',
                labels: {
                    format: {
                        '2015': d3.format(','),
                        '2019': d3.format(',')
                    }
                },
                line: {
                    connectNull: true
                }
            },
            legend: {
                show: false
            },
            color: {
                pattern: ['#9EE384','#67B4C2']
            },
            axis: {
                rotated: true,
                y: {
                    show: false,
                    max: 381000,
                    min: 0, 
                    padding: {
                        bottom: 0,
                        top: 0
                    },
                    tick: {
                        count: 4,
                        values: [0, 381000],
                        format: d3.format(',')
                    }
                },
                x: {
                    padding: {
                        right: 0,
                        left: 0
                    },
                    type: 'category',
                    categories: ['Donations','Donors'],
                    tick: {
                        multiline: false
                    }
                }
            },
            grid: {
                focus: {
                    show: false
                }
            }
        });

        // d3.selectAll(".c3-target-2019")
        // .selectAll(".c3-bar, .c3-texts")
        // .attr("transform", "translate(0, 1)");

    }

}

export {
    AllChart as
    default
}