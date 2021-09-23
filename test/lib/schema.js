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
                        },
                        assetRef: {
                            $type: 'number',
                            $editorType: 'asset',
                            $allowNull: true,
                            $default: null
                        },
                        assetArrayRef: {
                            $type: '[number]',
                            $editorType: 'array:asset',
                            $default: []
                        },
                        nestedAssetRef: {
                            $type: 'map',
                            $of: {
                                asset: {
                                    $type: 'number',
                                    $editorType: 'asset',
                                    $default: null
                                }
                            }
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
