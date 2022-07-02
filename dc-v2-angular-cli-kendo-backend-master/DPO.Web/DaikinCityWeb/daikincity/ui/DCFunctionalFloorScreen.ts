/// <reference path="DCScreen.ts" />
module daikincity.ui
{
    export class DCFunctionalFloorScreen extends daikincity.ui.DCScreen
    {
        private configurationElement: HTMLDivElement;
        private configurationIconsElement: HTMLDivElement;
        private configurationTitleElement: HTMLDivElement;
        private configurationDescriptionElement: HTMLDivElement;
        private configurationImageElement: HTMLImageElement;
        private floorTitle: HTMLHeadingElement;
        private imageConfigurationContainer: HTMLDivElement;
        private floorImage: HTMLImageElement;
        private floorNavigation: HTMLDivElement;
        private zoomBtn: HTMLButtonElement;
        private energyComparisonElement: HTMLDivElement;
        private configurationContainerLeft: HTMLDivElement;
        private configurationContainerRight: HTMLDivElement;
        private layoutColumns: Array<HTMLDivElement>;
        private layoutButtonsDict: { [id: number]: Array<DCSystemButton> };
        private tabsContainerElement: HTMLDivElement;
        private tabButtons: Array<HTMLButtonElement>;

        private currentFloor: daikincity.building.functional.DCFunctionalFloor = null;
        private currentConfiguration: daikincity.building.functional.DCFunctionalConfiguration = null;
        private systemIcons: Array<DCSystemIcon>;
        private configurationIcon: DCSystemIcon = null;
        private configurationOptionContainers: Array<HTMLDivElement>;
        private configurationCanvas: HTMLCanvasElement;
        private configurationCanvasContext: CanvasRenderingContext2D;

        private energySavingCanvasElement: HTMLCanvasElement;
        private energySavingsKWHValue: HTMLParagraphElement;
        private energySavingWidget: com.wearesmartcookie.widgets.circular.SCCircularWidget;

        private resizeTimeout: number = -1;

        public floorMenu: DCFloorMenu;
        private core: DCCore;

        private chart: google.visualization.ColumnChart = null;

        constructor()
        {
            super(document.getElementById("functionalBuilding"));

            this.core = DCCore.I;

            this.configurationTitleElement = <HTMLDivElement> document.getElementById("configurationTitle");
            this.configurationDescriptionElement = <HTMLDivElement> document.getElementById("configurationDescription");

            this.floorNavigation = <HTMLDivElement>document.getElementById("floorNavigation");
            this.zoomBtn = <HTMLButtonElement>document.getElementById("zoomBtn");
            this.zoomBtn.onclick = (e) => this.onZoomClicked(e);

            this.configurationElement = <HTMLDivElement> document.getElementById("buildingConfiguration");
            this.configurationIconsElement = <HTMLDivElement> document.getElementById("configurationIcons");
            this.floorTitle = <HTMLHeadingElement> document.getElementById("floorTitle");
            this.imageConfigurationContainer = <HTMLDivElement> document.getElementById("floorImageContainer");
            this.floorImage = <HTMLImageElement> document.getElementById("floorImage");
            this.energyComparisonElement = <HTMLDivElement>document.getElementById("buildingEnergyComparison");

            this.systemIcons = [];
            this.tabButtons = [];

            this.configurationContainerLeft = <HTMLDivElement> document.getElementById("configurationContainerLeft");
            this.configurationContainerRight = <HTMLDivElement> document.getElementById("configurationContainerRight");

            this.configurationCanvas = <HTMLCanvasElement> document.getElementById("configurationButtonsCanvas");
            this.configurationCanvasContext = this.configurationCanvas.getContext("2d");

            this.energySavingCanvasElement = <HTMLCanvasElement> document.getElementById("savingsCanvasKWH");
            this.energySavingsKWHValue = <HTMLParagraphElement> document.getElementById("savingsKWHValue");
            this.energySavingWidget = new com.wearesmartcookie.widgets.circular.SCCircularWidget(this.energySavingCanvasElement.getContext("2d"));
            this.energySavingWidget.addLayer(new com.wearesmartcookie.widgets.circular.SCCircularWidgetLayer("#595f68", "#595f68", false, 1, 58, 8, 5));
            this.energySavingWidget.addLayer(new com.wearesmartcookie.widgets.circular.SCCircularWidgetLayer("#4eb9e9", "#4eb9e9", true, 1, 70, 16, 5));

            this.configurationImageElement = <HTMLImageElement>document.getElementById("configurationImage");
            this.tabsContainerElement = <HTMLDivElement> document.getElementById("configurationTabs");
            /*
            this.overviewTabButton = <HTMLButtonElement> document.getElementById("configuration_overview_btn");
            this.overviewTabButton.onclick = (e) => this.onOverviewTabClicked(e);
            this.indoorUnitsTabButton = <HTMLButtonElement> document.getElementById("configuration_indoor_units_btn");
            this.indoorUnitsTabButton.onclick = (e) => this.onIndoorUnitsTabClicked(e);
            */

            this.floorMenu = new DCFloorMenu();
            this.floorNavigation.appendChild(this.floorMenu.element);

            this.layoutColumns =
            [
                <HTMLDivElement> document.getElementById("layoutColumn1"),
                <HTMLDivElement> document.getElementById("layoutColumn2"),
                <HTMLDivElement> document.getElementById("layoutColumn3")
            ];

            window.addEventListener("resize", (e) => this.onResize(e), false);
        }

        public showFloor(floor: daikincity.building.functional.DCFunctionalFloor): void
        {
            this.floorImage.style.visibility = "hidden";

            $("#buildingInformation").width(0);
            $("#buildingInformation").animate({ width: "35%" }, 250);

            $("#buildingView").css("background-color", "#BDEBFF");
            $("#buildingView").animate({ backgroundColor: "#5DC7F1" }, 250);

            $("#buildingConfiguration").height(0);
            $("#buildingConfiguration").animate({ height: "27.5%" }, 500);

            this.currentFloor = floor;
            this.configurationIconsElement.innerHTML = "";
            this.systemIcons = [];

            this.floorTitle.innerHTML = floor.name;

            this.floorImage.src = "";
            this.floorImage.addEventListener("error", () => this.onFloorImageLoadError(), false);
            this.floorImage.addEventListener("load", () => this.onFloorImageLoaded(), false);
            this.floorImage.src = floor.floorImage;

            this.configurationTitleElement.innerHTML = "";
            this.configurationDescriptionElement.innerHTML = "";

            if (this.core.currentBuilding.numFloors > 1)
            {
                this.floorNavigation.style.display = "block";
                this.floorMenu.populate(this.core.currentBuilding, floor.id);

                // set buttons widths
                var w: number = 100 / this.floorMenu.numButtons;
                for (var i: number = 0; i < this.floorMenu.numButtons; i++)
                {
                    this.floorMenu.getButtonAt(i).element.style.width = w.toString() + "%";
                }
            }
            else
            {
                this.floorMenu.clear();
                this.floorNavigation.style.display = "none";
            }

            this.configurationContainerLeft.innerHTML = "";

            for (var i: number = 0; i < floor.numConfigurations; i++)
            {
                var configuration: daikincity.building.functional.DCFunctionalConfiguration = floor.getConfigurationAt(i);
                var button: HTMLButtonElement = document.createElement("button");
                $(button).addClass("configurationButton");
                button.id = configuration.id.toString();
                button.innerHTML = "<span>" + configuration.name + "</span>";
                button.onclick = (e) => this.onConfigurationSelected(e);
                this.configurationContainerLeft.appendChild(button);
            }

            this.drawChart();
            this.showConfiguration(this.currentFloor.getConfigurationAt(0));
        }

        private onFloorImageLoaded(): void
        {
            this.floorImage.style.visibility = "visible";
            this.dispatchEvent(new away.events.Event("ready"));
        }

        private onFloorImageLoadError(): void
        {
            trace("error loading floor image");
            this.onFloorImageLoaded();
        }

        private drawChart(): void
        {
            if (this.chart == null)
            {
                this.chart = new google.visualization.ColumnChart(this.energyComparisonElement);
            }

            var metaData: Array<any> =
                [
                    { columnName: "BS", color: "#CC33FF" },
                    { columnName: "HP", color: "#20A4E0" },
                    { columnName: "HR", color: "#BA026E" },
                    { columnName: "A1", color: "#D3922C" },
                    { columnName: "A2", color: "#7DBC67" },
                    { columnName: "A3", color: "#2E3641" }
                ];

            var options: google.visualization.ColumnChartOptions =
                {
                    backgroundColor: "#DEF5FF",
                    legend: "none",
                    title: "Energy Efficiency Comparison",
                    titleTextStyle: { color: "#2e3641", fontName: '"museo-sans", sans-serif', fontSize: 12, italic: false },
                    tooltip: { isHtml: true },
                    vAxis: { title: "Average I EER", textStyle: { italic: false, bold: true }, gridlines: { color: "#9BD4EF", count: 5 }, maxValue: this.currentFloor.getHighestEnergyValue() },
                    width: this.energyComparisonElement.offsetWidth,
                    height: this.energyComparisonElement.offsetHeight,
                    animation: { duration: 500, easing: 'out' }
                };

            var data: Array<Array<any>> = [];
            
            // must have for animation
            var i: number;
            data.push(["Energy Efficiency Comparison", "type", { role: 'style' }, { role: 'tooltip', 'p': { 'html': true } }]);
            for (i = 0; i < this.currentFloor.numConfigurations + this.currentFloor.numAlternativeConfigurations; i++)
            {
                data.push([metaData[i].columnName, 0, metaData[i].color, ""]);
            }

            this.chart.draw(google.visualization.arrayToDataTable(data), options);

            data = [];
            data.push(["Energy Efficiency Comparison", "type", { role: 'style' }, { role: 'tooltip', 'p': { 'html': true } }]);

            var configuration: daikincity.building.functional.DCFunctionalConfiguration;
            var columnName: string = "", color: string = "", c: number = 0;
            for (i = 0; i < this.currentFloor.numConfigurations; i++)
            {
                configuration = this.currentFloor.getConfigurationAt(i);
                if (c < metaData.length)
                {
                    columnName = metaData[c].columnName;
                    color = metaData[c].color;
                }
                data.push([columnName, configuration.energy, color, this.tooltip(configuration.name + ": " + configuration.energy.toString())]);
                c++;
            }

            for (i = 0; i < this.currentFloor.numAlternativeConfigurations; i++)
            {
                configuration = this.currentFloor.getAlternativeConfigurationAt(i);
                if (c < metaData.length)
                {
                    columnName = metaData[c].columnName;
                    color = metaData[c].color;
                }
                data.push([columnName, configuration.energy, color, this.tooltip(configuration.name + ": " + configuration.energy.toString())]);
                c++;
            }

            this.chart.draw(google.visualization.arrayToDataTable(data), options);
        }

        public showConfiguration(configuration: daikincity.building.functional.DCFunctionalConfiguration): void
        {
            this.currentConfiguration = configuration;
            this.highlightConfigurationButtons();
            this.drawIcons();
            this.drawSavingsWidget();
            this.drawLayouts();
            this.showTabs();

            if (this.currentConfiguration.systemImage.length)
            {
                this.configurationImageElement.src = this.currentConfiguration.systemImage;
                this.configurationImageElement.style.display = "block";
            }
            else
            {
                this.configurationImageElement.style.display = "none";
            }

            var overlayImage: string = this.currentFloor.floorImage;
            if (this.currentConfiguration.overlayImage.length)
            {
                overlayImage = this.currentConfiguration.overlayImage;
            }
            this.floorImage.src = overlayImage;

            this.onResize();
        }

        private highlightConfigurationButtons(): void
        {
            for (var i: number = 0; i < this.configurationContainerLeft.children.length; i++)
            {
                var btn: HTMLButtonElement = <HTMLButtonElement> this.configurationContainerLeft.children.item(i);
                if (parseInt(btn.id) == this.currentConfiguration.id)
                {
                    $(btn).addClass("configurationButtonSelected");
                }
                else
                {
                    $(btn).removeClass("configurationButtonSelected");
                }
            }
        }

        private drawLayouts(): void
        {
            this.layoutButtonsDict = {}; // reset

            if (this.currentConfiguration.numLayouts == 0)
            {
                document.getElementById("layoutLabels").style.display = "none";
                this.configurationContainerRight.style.backgroundImage = "url(/daikincityweb/images/tile_bg.png)";
            }
            else
            {
                document.getElementById("layoutLabels").style.display = "block";
                this.configurationContainerRight.style.backgroundImage = "";
            }

            var i: number;

            // clear out
            for (i = 0; i < this.layoutColumns.length; i++)
            {
                this.layoutColumns[i].innerHTML = "";
            }

            // create elements
            for (i = 0; i < this.currentConfiguration.numLayouts; i++)
            {
                var layout: daikincity.building.functional.DCFunctionalConfigurationLayout = this.currentConfiguration.getLayoutAt(i);
                this.drawLayout(layout);

                // highlight first button in each tree
                if (this.layoutButtonsDict[layout.id].length > 0) 
                {
                    this.layoutButtonsDict[layout.id][0].setState(DCSystemButton.STATE_AVAILABLE);
                }
            }
        }

        private drawLayout(layout:daikincity.building.functional.DCFunctionalConfigurationLayout): void
        {
            this.layoutButtonsDict[layout.id] = [];
            if (layout.rootNode != undefined)
            {
                this.createConfigurationNode(layout.rootNode, 1, layout.id);
            }
        }

        private drawSavingsWidget(): void
        {
            var baselineEnergy: number = this.currentFloor.getConfigurationAt(0).energy;
            var currentEnergy: number = this.currentConfiguration.energy;
            this.energySavingWidget.value = 1 - currentEnergy / baselineEnergy;
            if (this.currentConfiguration.numLayouts == 0) this.energySavingWidget.value = 0;
            this.energySavingWidget.draw();

            // was using ceil but still had wrong values so trying round...
            var v: Number = -Math.round(-this.energySavingWidget.value * 100);

            this.energySavingsKWHValue.innerHTML = (v != 0 ? v : 100) + "<span>%</span>";
        }

        private drawIcons(): void
        {
            if (this.currentConfiguration == null) return;

            var systems: Array<number> = [];
            this.configurationIconsElement.innerHTML = "";

            this.configurationTitleElement.innerHTML = this.currentConfiguration.name;
            this.configurationDescriptionElement.innerHTML = "";

            // configuration button
            this.configurationIcon = new DCSystemIcon(null, null);
            this.configurationIcon.setState(DCSystemIcon.STATE_ON);
            this.configurationIcon.element.onclick = (e) => this.onConfigurationIconSelected(e);
            this.configurationIconsElement.appendChild(this.configurationIcon.element);


            // multiple layouts, ignore duplicates
            for (var i: number = 0; i < this.currentConfiguration.numLayouts; i++)
            {
                var layout: daikincity.building.functional.DCFunctionalConfigurationLayout = this.currentConfiguration.getLayoutAt(i);
                for (var j: number = 0; j < layout.numSystems; j++)
                {
                    var systemId: number = layout.getSystemAt(j);
                    if (systems.indexOf(systemId) == -1)
                    {
                        systems.push(systemId);
                        var icon: DCSystemIcon = new DCSystemIcon(this.core.getSystemById(systemId), layout);
                        icon.element.onclick = (e) => this.onIconSelected(e);
                        this.configurationIconsElement.appendChild(icon.element);
                        this.systemIcons.push(icon);
                    }
                }
            }
        }

        private onConfigurationSelected(e: MouseEvent): void
        {
            var element: HTMLElement = <HTMLElement> e.currentTarget;
            this.showConfiguration(this.currentFloor.getConfigurationById(parseInt(element.id)));
        }

        private createConfigurationNode(node: daikincity.building.functional.DCConfigurationNode, depth: number, layoutId: number): void
        {
            var container: HTMLDivElement = this.layoutColumns[depth - 1];
            if (!this.containerHas(container, node.systemId))
            {
                var systemBtn: DCSystemButton = new DCSystemButton(node, layoutId);
                systemBtn.element.onclick = (e) => this.onConfigurationOptionSelected(e);
                container.appendChild(systemBtn.element);
                this.layoutButtonsDict[layoutId].push(systemBtn);
            }
            for (var i: number = 0; i < node.numNodes; i++)
            {
                this.createConfigurationNode(node.getNodeAt(i), depth + 1, layoutId);
            }
        }

        private containerHas(container: HTMLDivElement, id: number): boolean
        {
            for (var i: number = 0; i < container.children.length; i++)
            {
                if ((<HTMLButtonElement>container.children[i]).id == id.toString()) return true;
            }

            return false;
        }

        private onConfigurationOptionSelected(e: MouseEvent): void
        {
            var element: HTMLElement = <HTMLElement> e.currentTarget;

            var matches: Array<string> = element.id.match(/^(\d+)_(\d+)$/);
            if (matches != null)
            {
                var layoutId: number = parseInt(matches[1]);
                var systemId: number = parseInt(matches[2]);
                this.selectOption(layoutId, systemId);
            }
        }

        public selectOption(layoutId: number, systemId: number): void
        {
            var systemBtn: DCSystemButton = this.getSystemButtonById(layoutId, systemId);
            var system: system.DCSystem = null;

            switch (systemBtn.state)
            {
                case DCSystemButton.STATE_OFF:
                    return;
                case DCSystemButton.STATE_AVAILABLE:
                    systemBtn.setState(DCSystemButton.STATE_ON);
                    system = systemBtn.system;
                    break;
                case DCSystemButton.STATE_ON:
                    systemBtn.setState(DCSystemButton.STATE_AVAILABLE);
                    var parentNode: daikincity.building.functional.DCConfigurationNode = systemBtn.configurationNode.parentNode;
                    if (parentNode != null) system = this.core.getSystemById(parentNode.systemId);
                    break;
            }

            this.hideTabs();
            this.toggleSystemButton(systemBtn, layoutId);
            this.showSystem(system);
            this.onResize();
        }

        private toggleSystemButton(systemBtn: DCSystemButton, layoutId:number): void
        {
            var layout: daikincity.building.functional.DCFunctionalConfigurationLayout = this.currentConfiguration.getLayoutById(layoutId);
            if (systemBtn.configurationNode.systemId != layout.rootNode.systemId)
            {
                var parents: Array<daikincity.building.functional.DCConfigurationNode> = daikincity.building.functional.DCConfigurationNode.getParentNodesByOptionId(layout.rootNode, systemBtn.configurationNode.systemId);
                var activateButton: boolean = false;
                var i: number = 0;
                var parentBtn: DCSystemButton;
                for (i = 0; i < parents.length; i++)
                {
                    parentBtn = this.getSystemButtonById(layoutId, parents[i].systemId);
                    if (parentBtn.state == DCSystemButton.STATE_ON)
                    {
                        activateButton = true;
                        break;
                    }
                }

                if (activateButton == true)
                {
                    if (systemBtn.state != DCSystemButton.STATE_ON)
                    {
                        systemBtn.setState(DCSystemButton.STATE_AVAILABLE);
                    }
                }
                else
                {
                    systemBtn.setState(DCSystemButton.STATE_OFF);
                }
            }

            for (i = 0; i < systemBtn.configurationNode.numNodes; i++)
            {
                this.toggleSystemButton(this.getSystemButtonById(layoutId, systemBtn.configurationNode.getNodeAt(i).systemId), layoutId);
            }
        }

        private getSystemButtonById(layoutId:number, systemId: number): DCSystemButton
        {
            if (this.layoutButtonsDict[layoutId] == undefined) return null;
            for (var i: number = 0; i < this.layoutButtonsDict[layoutId].length; i++)
            {
                if (this.layoutButtonsDict[layoutId][i].element.id == layoutId + "_" + systemId) return this.layoutButtonsDict[layoutId][i];
            }
            return null;
        }

        private getSystemIconById(id: number): DCSystemIcon
        {
            for (var i: number = 0; i < this.systemIcons.length; i++)
            {
                if (this.systemIcons[i].system.id == id) return this.systemIcons[i];
            }
            return null;
        }

        private showSystem(system: daikincity.system.DCSystem): void
        {
            if (system != null)
            {
                this.configurationTitleElement.innerHTML = system.name;
                this.configurationDescriptionElement.innerHTML = system.description;
                this.configurationImageElement.src = system.image;

                if (system.image.length)
                {
                    this.configurationImageElement.src = system.image;
                    this.configurationImageElement.style.display = "block";
                }
                else
                {
                    this.configurationImageElement.style.display = "none";
                }
            }

            var iconSelected: boolean = false;

            for (var i: number = 0; i < this.systemIcons.length; i++)
            {
                var icon: DCSystemIcon = this.systemIcons[i];
                var systemBtn: DCSystemButton = this.getSystemButtonById(icon.layout.id, icon.system.id);

                if (systemBtn == null) continue;

                if (systemBtn.state == DCSystemButton.STATE_ON)
                {
                    if (system != null && system.id == systemBtn.configurationNode.systemId)
                    {
                        icon.setState(DCSystemIcon.STATE_ON);
                        iconSelected = true;
                    }
                    else
                    {
                        icon.setState(DCSystemIcon.STATE_AVAILABLE);
                    }
                }
                else
                {
                    icon.setState(DCSystemIcon.STATE_OFF);
                }
            }

            if (iconSelected == true)
            {
                this.configurationIcon.setState(DCSystemIcon.STATE_AVAILABLE);
                this.hideTabs();
            }
            else
            {
                this.configurationTitleElement.innerHTML = this.currentConfiguration.name;
                this.configurationImageElement.src = this.currentConfiguration.systemImage;
                this.configurationIcon.setState(DCSystemIcon.STATE_ON);
                this.showTabs();
            }
        }

        private onIconSelected(e: MouseEvent): void
        {
            var element: HTMLButtonElement = <HTMLButtonElement> e.currentTarget;
            var systemIcon: DCSystemIcon = this.getSystemIconById(parseInt(element.id));
            if (systemIcon.state == DCSystemIcon.STATE_AVAILABLE)
            {
                this.showSystem(systemIcon.system);
            }
        }

        private onConfigurationIconSelected(e: MouseEvent): void
        {
            this.showSystem(null);
        }

        private onZoomClicked(e: MouseEvent): void
        {
            var content: HTMLDivElement = document.createElement("div");
            $(content).addClass("floorImageContainer");
            content.innerHTML = this.imageConfigurationContainer.innerHTML;

            var closeBtn: HTMLButtonElement = document.createElement("button");
            $(closeBtn).addClass("zoom-close-btn");
            content.appendChild(closeBtn);
            closeBtn.onclick = (e) => this.onZoomClose(e);

            this.core.lightbox.bestFitRect.width = 603;
            this.core.lightbox.bestFitRect.height = 472;

            this.core.lightbox.maxSizeRect.width = 0;

            this.core.lightbox.minSizeRect.width = 300;
            this.core.lightbox.minSizeRect.height = 235;

            this.core.lightbox.show(content, true);
        }

        private onZoomClose(e: MouseEvent): void
        {
            this.core.lightbox.hide();
        }

        private drawConnections(): void
        {
            this.configurationCanvasContext.clearRect(0, 0, this.configurationCanvas.width, this.configurationCanvas.height);
            for (var i: number = 0; i < this.currentConfiguration.numLayouts; i++)
            {
                var layout: daikincity.building.functional.DCFunctionalConfigurationLayout = this.currentConfiguration.getLayoutAt(i);
                if (layout.rootNode != null)
                {
                    this.drawConnection(layout.rootNode, layout.id);
                }
            }
        }

        private drawConnection(node: daikincity.building.functional.DCConfigurationNode, layoutId:number): void
        {
            this.configurationCanvasContext.strokeStyle = "#959595";
            this.configurationCanvasContext.lineWidth = 5;

            var nodeBtn: DCSystemButton = this.getSystemButtonById(layoutId, node.systemId);
            var canvasRect: ClientRect = this.configurationCanvas.getBoundingClientRect();
            var nodeRect: ClientRect = nodeBtn.element.getBoundingClientRect();
            var r: ClientRect;

            for (var i: number = 0; i < node.numNodes; i++)
            {
                var child: daikincity.building.functional.DCConfigurationNode = node.getNodeAt(i);
                var childBtn: DCSystemButton = this.getSystemButtonById(layoutId, child.systemId);

                r = childBtn.element.getBoundingClientRect();

                this.configurationCanvasContext.beginPath();
                this.configurationCanvasContext.moveTo(nodeRect.left + nodeRect.width - canvasRect.left, nodeRect.top + (r.height * 0.5) - canvasRect.top);

                if (nodeRect.top == r.top)
                {
                    this.configurationCanvasContext.lineTo(r.left - canvasRect.left, r.top + (r.height * 0.5) - canvasRect.top);
                }
                else
                {
                    var distX: number = r.left - (nodeRect.left + nodeRect.width);

                    this.configurationCanvasContext.lineTo(nodeRect.left + nodeRect.width + (distX * 0.5) - canvasRect.left - 15, nodeRect.top + (r.height * 0.5) - canvasRect.top);
                    this.configurationCanvasContext.lineTo(nodeRect.left + nodeRect.width + (distX * 0.5) - canvasRect.left - 15, r.top + (r.height * 0.5) - canvasRect.top);
                    this.configurationCanvasContext.lineTo(r.left - canvasRect.left, r.top + (r.height * 0.5) - canvasRect.top); 
                }
                this.configurationCanvasContext.stroke();

                this.drawConnection(child, layoutId);
            }
        }

        private onResize(e: Event = null): void
        {
            if (this.resizeTimeout != -1)
            {
                clearTimeout(this.resizeTimeout);
                this.resizeTimeout = -1;
            }

            this.resizeTimeout = setTimeout(() => this.resize(), 10); // setTimeout fix wrong w/h values on maximise
        }

        private resize(): void
        {
            this.configurationCanvas.width = this.configurationContainerRight.offsetWidth;
            this.configurationCanvas.height = this.configurationContainerRight.offsetHeight;
            if (this.visible)
            {
                if (this.currentFloor != null)
                {
                    this.drawConnections();
                }

                if (this.chart != null)
                {
                    this.drawChart();
                }
            }
        }

        private tooltip(s: string): string
        {
            return '<div style="padding:8px 12px;\
                                text-align:center;\
                                class="chart-tooltip">' + s + '</div>';
        }

        private showTabs(): void
        {
            this.tabsContainerElement.innerHTML = "";

            if (this.currentConfiguration.numIndoorUnits > 0)
            {
                var w: number = 100 / (1 + this.currentConfiguration.numIndoorUnits);

                //overview button
                var overviewBtn: HTMLButtonElement = this.createTabButton("Overview");
                $(overviewBtn).addClass("tab-button-selected");
                overviewBtn.style.width = w + "%";
                overviewBtn.style.left = "0";
                overviewBtn.id = "overviewBtn";
                overviewBtn.onclick = (e: MouseEvent) => this.onTabButtonSelected(e);
                this.tabsContainerElement.appendChild(overviewBtn);
                this.tabButtons.push(overviewBtn);

                for (var i: number = 0; i < this.currentConfiguration.numIndoorUnits; i++)
                {
                    var systemId:number = this.currentConfiguration.getIndoorUnitAt(i);
                    var system: daikincity.system.DCSystem = this.core.getSystemById(systemId);
                    var indoorUnitBtn: HTMLButtonElement;
                    if (system != null)
                    {
                        indoorUnitBtn = this.createTabButton(system.name);
                    }
                    else
                    {
                        indoorUnitBtn = this.createTabButton("Indoor Unit " + (i + 1));
                    }
                    indoorUnitBtn.style.width = w + "%";
                    indoorUnitBtn.style.left = ((i + 1) * w) + "%";
                    indoorUnitBtn.id = systemId.toString();
                    indoorUnitBtn.onclick = (e: MouseEvent) => this.onTabButtonSelected(e);
                    this.tabsContainerElement.appendChild(indoorUnitBtn);
                    this.tabButtons.push(indoorUnitBtn);
                }

                // ensure tabs are visible
                this.tabsContainerElement.style.display = "block";
            }
            else
            {
                this.hideTabs();
            }
            
            this.showOverviewTab();
        }

        private onTabButtonSelected(e: MouseEvent): void
        {
            var btn = <HTMLButtonElement> e.currentTarget;

            if (btn.id == "overviewBtn")
            {
                this.showOverviewTab();
            }
            else
            {
                var systemId: number = parseInt(btn.id);
                this.showSystemTab(systemId);
            }

            // highlights
            for (var i: number = 0; i < this.tabButtons.length; i++)
            {
                $(this.tabButtons[i]).removeClass("tab-button-selected");
            }
            $(btn).addClass("tab-button-selected");
        }

        private showOverviewTab(): void
        {
            var s: string = "System Type: " + this.currentConfiguration.systemType;
            s += "<br />";
            s += "System Size: " + this.currentConfiguration.systemSize;
            this.configurationDescriptionElement.innerHTML = s;
            this.configurationImageElement.src = this.currentConfiguration.systemImage;
        }

        private showSystemTab(systemId: number): void
        {
            var system: daikincity.system.DCSystem = this.core.getSystemById(systemId);
            if (system != null)
            {
                this.configurationDescriptionElement.innerHTML = system.description;
                this.configurationImageElement.src = system.image;
            }
        }

        private hideTabs(): void
        {
            this.tabsContainerElement.style.display = "none";
        }

        private createTabButton(text: string): HTMLButtonElement
        {
            var btn: HTMLButtonElement = document.createElement("button");
            $(btn).addClass("tab-button");
            btn.innerHTML = "<span>" + text + "</span>";
            return btn;
        }
    }
}