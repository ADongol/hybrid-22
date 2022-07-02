module daikincity.building.functional
{
    export class DCFunctionalConfigurationLayout
    {
        private _id: number;
        private _name: string;
        public rootNode: DCConfigurationNode;
        public maxDepth: number = 1;
        private nodes: Array<DCConfigurationNode>;
        private systems: Array<number>;

        constructor(id: number, name: string)
        {
            this._id = id;
            this._name = name;
            this.nodes = [];
            this.systems = [];
        }

        public parseConfigurationLayout(json: any): void
        {
            this.rootNode = this.parseNode(json, 1);
        }

        public parseNode(nodeJson: any, depth: number = 0): DCConfigurationNode
        {
            if (depth > this.maxDepth) this.maxDepth = depth;

            var node: DCConfigurationNode = new DCConfigurationNode(parseInt(nodeJson.id));

            if (this.systems.indexOf(node.systemId) == -1)
            {
                this.systems.push(node.systemId);
            }

            var nodes: Array<any> = nodeJson.node;
            if (nodes != undefined)
            {
                for (var i: number = 0; i < nodes.length; i++)
                {
                    node.addNode(this.parseNode(nodes[i], depth + 1));
                }
            }
            this.nodes.push(node);
            return node;
        }

        public getSystemAt(index: number): number
        {
            return this.systems[index];
        }

        public static fromJson(json: any): DCFunctionalConfigurationLayout
        {
            var layout: DCFunctionalConfigurationLayout = new DCFunctionalConfigurationLayout(parseInt(json.id), json.name);
            if (json.node != undefined)
            {
                layout.parseConfigurationLayout(json.node);
            }

            return layout;
        }

        public get id(): number { return this._id; }
        public get name(): string { return this._name; }
        public get numSystems(): number { return this.systems.length; }
    }
} 