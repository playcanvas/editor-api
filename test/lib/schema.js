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
    }
}
