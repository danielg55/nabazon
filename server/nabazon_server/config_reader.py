import os
import sys

import pkg_resources
import yaml
from loguru import logger

CONFIG_ENV_VAR = "CONFIG"


def load_yml_from_file():
    config_resource_path = "resources/config.yml"
    try:
        config_resource_path = os.environ[CONFIG_ENV_VAR]
    except KeyError:
        logger.info("Could not find {} environment variable, using default path instead: '{}'",
                    CONFIG_ENV_VAR, config_resource_path)
    try:
        with pkg_resources.resource_stream(__name__, config_resource_path) as yml_conf:
            return yaml.safe_load(yml_conf)
    except yaml.YAMLError as error:
        logger.critical("Error in configuration file: {} because: {}", config_resource_path, error)
        sys.exit(1)
