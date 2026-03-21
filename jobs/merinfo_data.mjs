#!/usr/bin/env node

/**
 * - Fetches queued records from mer_data table (is_queued = true)
 * - Scrapes additional person data from Merinfo.se for each queued record
 * - Updates records with enriched Merinfo data
 * - Sets is_queued = false when processing is complete
 */

import { program } from 'commander';
import { promises as fs } from 'fs';
import path from 'path';
import { chromium } from 'playwright';
import axios from 'axios';
import Database from 'better-sqlite3';
