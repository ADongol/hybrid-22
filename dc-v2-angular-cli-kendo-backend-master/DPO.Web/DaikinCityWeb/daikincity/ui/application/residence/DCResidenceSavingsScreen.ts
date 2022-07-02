module daikincity.ui.application.residence
{
    export class DCResidenceSavingsScreen extends daikincity.ui.DCScreen implements IDCResidenceScreen
    {
        public refreshBtn: HTMLButtonElement;
        public nextBtn: HTMLButtonElement;
        public previousBtn: HTMLButtonElement;

        private accordionMenu: Accordion;
        private chart: google.visualization.ComboChart;
        private savingsChartContainer: HTMLDivElement;
        private resizeTimeout: number = -1;

        constructor()
        {
            super(document.getElementById("residenceSavings"));
            this.savingsChartContainer = <HTMLDivElement> document.getElementById("savingsChartContainer");
            this.previousBtn = <HTMLButtonElement>document.getElementById("savingsPreviousBtn");
            this.refreshBtn = <HTMLButtonElement>document.getElementById("savingsRefreshBtn");
            this.accordionMenu = new Accordion(document.getElementById("residenceSavingsMenu"), "44px", 8);
        }

        public show()
        {
            super.show();
            this.accordionMenu.start();

            window.addEventListener("resize", (e) => this.onResize(e), false);
            this.onResize();
        }

        private drawChart(): void
        {
            this.chart = new google.visualization.ComboChart(this.savingsChartContainer);

            var data: google.visualization.DataTable = new google.visualization.DataTable();

            data.addColumn('string', 'Period');
            data.addColumn('number', 'New System');
            data.addColumn({ type: 'string', role: 'tooltip', 'p': { 'html': true } });
            data.addColumn('number', 'Daikin Inverter Duct');
            data.addColumn({ type: 'string', role: 'tooltip', 'p': { 'html': true } });
            data.addColumn('number', 'Daikin Multi Split');
            data.addColumn({ type: 'string', role: 'tooltip', 'p': { 'html': true } });
            data.addColumn('number', 'Daikin Altherma');
            data.addColumn({ type: 'string', role: 'tooltip', 'p': { 'html': true } });
            data.addColumn('number', 'Manually Selected Solution');
            data.addColumn({ type: 'string', role: 'tooltip', 'p': { 'html': true } });
            data.addRows(
                [
                    ['1 Yr', 600, this.tooltip("600"), 500, this.tooltip("500"), 200, this.tooltip("200"), 400, this.tooltip("200"), 750, this.tooltip("750")],
                    ['2 Yr', 800, this.tooltip("800"), 600, this.tooltip("600"), 200, this.tooltip("200"), 400, this.tooltip("200"), 600, this.tooltip("600")],
                    ['5 Yr', 900, this.tooltip("900"), 700, this.tooltip("700"), 200, this.tooltip("200"), 400, this.tooltip("200"), 700, this.tooltip("700")],
                    ['10 Yr', 1000, this.tooltip("1000"), 900, this.tooltip("900"), 200, this.tooltip("200"), 400, this.tooltip("200"), 550, this.tooltip("550")],
                    ['15 Yr', 1000, this.tooltip("1000"), 950, this.tooltip("950"), 200, this.tooltip("200"), 400, this.tooltip("200"), 400, this.tooltip("400")]
                ]);

            var options: google.visualization.BarChartOptions =
            {
                backgroundColor: "#eefaff",
                width: this.savingsChartContainer.offsetWidth,
                height: this.savingsChartContainer.offsetHeight,
                vAxis: { gridlines: { color: "#9bd4ef", count: 7 } },
                seriesType: "bars",
                series: { 5: { type: "bars" } },
                colors: ['#20a4e0', '#ba026e', '#d3922c', '#7dbc67', '#414852'],
                legend: "none",
                titleTextStyle: { color: "#00a1e4", fontSize: 20 },
                tooltip: { isHtml: true }
            };

            this.chart.draw(data, options);
        }

        private tooltip(s: string): string
        {
            return '<div style="padding:8px 12px;\
                                text-align:center;\
                                class="chart-tooltip">' + s + '</div>';
        }

        public onResize(e: Event = null): void
        {
            if (this.resizeTimeout != -1)
            {
                clearTimeout(this.resizeTimeout);
            }

            this.resizeTimeout = setTimeout(() => this.resize(), 25);
        }

        private resize(): void
        {
            this.drawChart();
        }

        public hide()
        {
            window.removeEventListener("resize", (e) => this.onResize(e), false);
            this.accordionMenu.stop();
            super.hide();
        }

        public refresh(): void
        {
            
        }
    }
} 