// test schema
window.schema = {
    scene: {
        entities: {
            $of: {
                components: {
                    testcomponent: {
                        entityRef: {
                            $type: 'string',
                            $editorType: 'entity',
                            $allowNull: true,
                            $default: null
                        }
                    }
                }
            }
        }
    },
    animStateGraphData: {
        testData: {
            type: 'number',
            $default: 0
        }
    },
    materialData: {
        diffuse: {
            type: ["number"],
            $default: [0, 0, 0]
        }
    }
};
