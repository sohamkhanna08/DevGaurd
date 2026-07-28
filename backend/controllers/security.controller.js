const {
    createScanService,
    getAllScansService,
    getScanByIdService,
    deleteScanService
} = require("../services/security.service");

/**
 * POST /api/security/scans
 */
const createScan = async (req, res) => {
    try {

        const { url } = req.body;

        if (!url || typeof url !== 'string') {
            return res.status(400).json({
                success: false,
                message: "A valid URL string is required."
            });
        }

        const userId = req.user.id;
        
        const scan = await createScanService(url, userId);

        return res.status(201).json({
            success: true,
            message: "Website scanned successfully.",
            data: scan
        });

    } catch (err) {

        console.error(err);

        return res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

/**
 * GET /api/security/scans
 */
const getAllScans = async (req, res) => {
    try {

        const userId = req.user.id;

        const scans = await getAllScansService(userId);

        return res.status(200).json({
            success: true,
            count: scans.length,
            data: scans
        });

    } catch (err) {

        console.error(err);

        return res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

/**
 * GET /api/security/scans/:id
 */
const getScan = async (req, res) => {
    try {

        const { id } = req.params;

        const userId = req.user.id;

        const scan = await getScanByIdService(id, userId);

        if (!scan) {
            return res.status(404).json({
                success: false,
                message: "Scan not found."
            });
        }

        return res.status(200).json({
            success: true,
            data: scan
        });

    } catch (err) {

        console.error(err);

        return res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

/**
 * DELETE /api/security/scans/:id
 */
const deleteScan = async (req, res) => {
    try {

        const { id } = req.params;

        const userId = req.user.id;

        const deleted = await deleteScanService(id, userId);

        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: "Scan not found."
            });
        }

        return res.status(200).json({
            success: true,
            message: "Scan deleted successfully."
        });

    } catch (err) {

        console.error(err);

        return res.status(500).json({
            success: false,
            message: err.message
        });

    }
};

module.exports = {
    createScan,
    getAllScans,
    getScan,
    deleteScan
};