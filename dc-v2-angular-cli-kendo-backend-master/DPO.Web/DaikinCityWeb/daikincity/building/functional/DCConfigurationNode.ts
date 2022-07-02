module daikincity.building.functional
{
    export class DCConfigurationNode
    {
        public systemId: number;
        public parentNode: DCConfigurationNode = null;
        private nodes: Array<DCConfigurationNode>;

        constructor(systemId: number)
        {
            this.systemId = systemId;
            this.nodes = [];
        }

        public addNode(node: DCConfigurationNode): number
        {
            node.parentNode = this;
            return this.nodes.push(node);
        }

        public getNodeAt(index: number): DCConfigurationNode
        {
            return this.nodes[index];
        }

        public hasChild(systemId: number): boolean
        {
            var i: number = this.nodes.length;
            while (i--)
            {
                if (this.nodes[i].systemId == systemId) return true;
            }
            return false;
        }

        public static getParentNodesByOptionId(node: DCConfigurationNode, id: number, parents: Array<DCConfigurationNode> = []): Array<DCConfigurationNode>
        {
            if (node.hasChild(id)) parents.push(node);
            var i: number = node.numNodes;
            while (i--)
            {
                this.getParentNodesByOptionId(node.getNodeAt(i), id, parents);
            }
            return parents;
        }

        public get numNodes(): number { return this.nodes.length; }
    }
} 